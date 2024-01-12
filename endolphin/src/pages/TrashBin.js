import React from 'react';
import { useDrop } from 'react-dnd';
import plasticBinImage from './imgs/플라스틱쓰레기통.png';
import paperBinImage from './imgs/종이쓰레기통.png';
import generalBinImage from './imgs/일반쓰레기통.png';
import canBinImage from './imgs/캔쓰레기통.png';
import 폐건전지BinImage from './imgs/폐건전지쓰레기통.png';
import 비닐전용BinImage from './imgs/비닐전용쓰레기통.png';
import 유리전용BinImage from './imgs/유리전용쓰레기통.png';
import 의류수거함 from './imgs/의류수거함.png';
import 마대보관통 from './imgs/마대보관통.png';
import 형광등쓰레기통 from './imgs/형광등쓰레기통.png';
import 종이팩쓰레기통 from './imgs/종이팩쓰레기통.png';

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
        case 'can':
            image = canBinImage;
            break;
        case 'general':
            image = generalBinImage;
            break;
        case '폐건전지':
            image = 폐건전지BinImage;
            break;
        case '비닐전용':
            image = 비닐전용BinImage;
            break;
        case '유리전용':
            image = 유리전용BinImage;
            break;
        case '의류수거함':
            image = 의류수거함;
            break;
        case '마대보관통':
            image = 마대보관통;
            break;
        case '형광등쓰레기통':
            image = 형광등쓰레기통;
            break;
        case '종이팩전용':
            image = 종이팩쓰레기통;
            break;
            
        default:
            break;
    }

    return (
        <div className='trash-bin-bg'>
            <div ref={ref} className={`trash-bin trash-bin-${type}`}>
                {image && <img src={image} alt={`${type} trash bin`} />}
                {/* <p>{type}</p> */}
            </div>
        </div>
    );
}

export default TrashBin;
