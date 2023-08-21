import React from 'react';
import { useDrop } from 'react-dnd';
import plasticBinImage from './imgs/TestPlasticBin.png';
import paperBinImage from './imgs/TestPaperBin.png';


function TrashBin({ type, onDrop }) {
    const [, ref] = useDrop({
    accept: 'TRASH_ITEM', // 받아들일 수 있는 드래그 아이템 타입
    drop: (item) => {
        const isCorrectBin = item.type === type;
        onDrop(isCorrectBin, item);
    }, // 드롭 이벤트 발생 시 처리할 함수
    });

    let image;
    switch (type) {
        case 'plastic':
            image = plasticBinImage;
            break;
        case 'paper':
            image = paperBinImage;
            break;
        // 추가 쓰레기통 타입에 대한 이미지도 이곳에 추가 가능
        default:
            break;
    }

    return (
        <div ref={ref} className={`trash-bin trash-bin-${type}`}>
            {image && <img src={image} alt={`${type} trash bin`} />}
            <p>{type}</p>
        </div>
    );
}

export default TrashBin;
