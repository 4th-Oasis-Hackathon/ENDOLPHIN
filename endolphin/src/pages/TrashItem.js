import { useDrag } from 'react-dnd';

function TrashItem({ type, name, image, id }) {
    const [, ref] = useDrag({
    type: 'TRASH_ITEM',
    item: { type, name, id },
    });

    return (
    <div ref={ref} className="trash-item">
        <img src={image} alt={name} className="TestPet-img"/>
    </div>
    );
}

export default TrashItem;