import React from 'react';
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

function Game() {
    const [score, setScore] = useState(0);

    const [trashItems, setTrashItems] = useState([
        { id: 1, type: "plastic", name: "플라스틱", image: plasticImage },
        { id: 2, type: "paper", name: "종이", image: paperImage },
        // 추가 쓰레기 아이템들
    ]);
    const bins = ["plastic", "paper", /* 추가 수거함 타입들 */];

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
    
    return (
        <div className='game-design'>
            <DndProvider backend={HTML5Backend}>
            {/* TrashItem 컴포넌트를 렌더링 */}
            <div className='game-design-item'>
            {/* <TrashItem type="plastic" name="플라스틱" image={plasticImage} /> */}
            {/* {trashItems.map((item, index) => (
                <TrashItem key={index} type={item.type} name={item.name} image={item.image} />
            ))} */}
            {trashItems.map((trash, index) => (
                <TrashItem key={index} id={trash.id} type={trash.type} name={trash.name} image={trash.image} />
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