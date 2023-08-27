import React, { useEffect } from 'react';
import { useDrag } from 'react-dnd';

function TrashItem({ type, name, image, id }) {
    const [{ isDragging }, ref] = useDrag({
        type: 'TRASH_ITEM',
        item: { type, name, id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    useEffect(() => {
        document.body.classList.add('custom-cursor');
        if (isDragging) {
            console.log(isDragging, "드래그 되는 중");
        } else {
            console.log(isDragging, "드래그 안 되는 중");
        }
    }, [isDragging]);

    return (
        <div ref={ref} className={`trash-item ${isDragging ? 'custom-cursor' : ''}`}>
            <img src={image} alt={name} className="TestPet-img"/>
        </div>
    );
    
}

export default TrashItem;
