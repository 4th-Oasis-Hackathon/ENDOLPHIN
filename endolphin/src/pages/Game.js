import React, { useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrag } from 'react-dnd';
import plasticImage from './imgs/TestPet.png';
import paperImage from './imgs/TestPaper.png';
import TrashItem from './TrashItem.js';
import TrashBin from './TrashBin.js';
import Timer from './Timer.js';
import ScoreBoard from './ScoreBoard';
import { useState } from 'react';
import 과자봉지쓰레기 from './imgs/과자봉지쓰레기.png';
import 병뚜껑쓰레기 from './imgs/병뚜껑쓰레기.png';
import 비닐봉지쓰레기 from './imgs/비닐봉지쓰레기.png';
import 스프레이용기쓰레기 from './imgs/스프레이용기쓰레기.png';
import 폐건전지쓰레기 from './imgs/폐건전지쓰레기.png';
import 플라스틱병쓰레기 from './imgs/플라스틱병쓰레기.png';
import 플라스틱빨대쓰레기 from './imgs/플라스틱빨대쓰레기.png';
import 깨진유리쓰레기 from './imgs/깨진유리쓰레기.png';
import 종이팩쓰레기 from './imgs/종이팩쓰레기.png';
import 캔쓰레기 from './imgs/캔쓰레기.png';
import 종이박스쓰레기 from './imgs/종이박스쓰레기.png';
import 색깔플라스틱병쓰레기 from './imgs/색깔플라스틱병쓰레기.png';
import 스티로폼쓰레기 from './imgs/스티로폼쓰레기.png';
import 유리병쓰레기 from './imgs/유리병쓰레기.png';



function Game() {
    const [score, setScore] = useState(0);

    const [trashItems, setTrashItems] = useState([
        // { id: 1, type: "plastic", name: "플라스틱", image: plasticImage },
        // { id: 2, type: "paper", name: "종이", image: paperImage },
        { id: 3, type: "general", name: "과자봉지", image: 과자봉지쓰레기 },
        { id: 4, type: "plastic", name: "병뚜껑", image: 병뚜껑쓰레기 },
        { id: 5, type: "general", name: "비닐봉지", image: 비닐봉지쓰레기 },
        { id: 6, type: "can", name: "스프레이용기", image: 스프레이용기쓰레기 },
        { id: 7, type: "general", name: "폐건전지", image: 폐건전지쓰레기 },
        { id: 8, type: "plastic", name: "플라스틱병", image: 플라스틱병쓰레기 },
        { id: 9, type: "plastic", name: "플라스틱빨대", image: 플라스틱빨대쓰레기 },
        { id: 10, type: "general", name: "깨진유리쓰레기", image: 깨진유리쓰레기 },
        { id: 11, type: "paper", name: "종이팩쓰레기", image: 종이팩쓰레기 },
        { id: 12, type: "can", name: "캔쓰레기", image: 캔쓰레기 },
        { id: 13, type: "paper", name: "종이박스쓰레기", image: 종이박스쓰레기 },
        { id: 14, type: "plastic", name: "색깔플라스틱병쓰레기", image: 색깔플라스틱병쓰레기 },
        { id: 15, type: "plastic", name: "스티로폼쓰레기", image: 스티로폼쓰레기 },
        { id: 16, type: "general", name: "유리병쓰레기", image: 유리병쓰레기 },
        // 추가 쓰레기 아이템들
    ]);
    const bins = ["general", "paper", "plastic", "can" /* 추가 수거함 타입들 */];

    const handleDrop = (isCorrectBin, item) => {
        if (isCorrectBin) {
            setScore(score + 1); // 점수 증가
            setTrashItems(prevItems => prevItems.filter(trash => trash.id !== item.id)); // 쓰레기 아이템 제거
            console.log("Correct!", item);
        } else {
            console.log("Wrong bin!", item);
        }
        // 드롭 로직 (예: 점수 증가)
    };
    const handleTimeUp = () => {
        console.log('시간이 끝났습니다!');
        // 게임 종료 또는 다른 로직 처리
    };

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const [shuffledTrashItems, setShuffledTrashItems] = useState([]);

    useEffect(() => {
        setShuffledTrashItems(shuffle([...trashItems]));
    }, [trashItems]);
    
    const generateOffset = () => {
        return {
          top: Math.floor(Math.random() * 400), // top offset은 0에서 100 픽셀 사이의 랜덤 값
          left: Math.floor(Math.random() * 800), // left offset은 0에서 100 픽셀 사이의 랜덤 값
        };
    };
    
    const shuffledTrashItemsWithOffset = shuffledTrashItems.map(item => ({
    ...item,
    offset: generateOffset(),
    }));

    return (
        <div className='game-design'>
            <DndProvider backend={HTML5Backend}>
            {/* TrashItem 컴포넌트를 렌더링 */}
            <div className='game-design-item'>
            {/* {trashItems.map((trash, index) => (
                <TrashItem key={index} id={trash.id} type={trash.type} name={trash.name} image={trash.image} />
            ))} */}
            {/* {shuffledTrashItems.map((trash, index) => (
            <TrashItem key={index} id={trash.id} type={trash.type} name={trash.name} image={trash.image} />
            ))} */}
            {shuffledTrashItemsWithOffset.map((trash, index) => (
            <TrashItem key={index} id={trash.id} type={trash.type} name={trash.name} image={trash.image} style={{ top: trash.offset.top, left: trash.offset.left }} />
            ))}
            </div>
            {/* 필요한 경우 다른 컴포넌트 또는 내용 추가 */}
            <div className='game-design-bin'>
            {/* <TrashBin type="plastic" onDrop={handleDrop} /> */}
            {bins.map((type, index) => (
                <TrashBin key={index} type={type} onDrop={handleDrop} />
            ))}
            </div>
            <div className='game-design-timer'>
            <Timer initialTime={60} onTimeUp={handleTimeUp} />
            </div>
            <div className='game-design-score'>
            <ScoreBoard score={score} />
            </div>
            </DndProvider>
        </div>
        );
    }

    export default Game;