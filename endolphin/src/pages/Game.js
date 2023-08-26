import React, { useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundMusic from './bgm/Sand Castle - Quincas Moreira.mp3'; 
import 맞게들어감 from './bgm/맞게들어감.mp3'; 
import 잘못넣음 from './bgm/잘못넣음.mp3'; 
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
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 의류쓰레기 from './imgs/의류쓰레기.png';
import 영농폐기물 from './imgs/영농폐기물.png';
import 형광등쓰레기 from './imgs/형광등쓰레기.png';
import 달걀껍질쓰레기 from './imgs/달걀껍질쓰레기.png';


function Game() {
    const [score, setScore] = useState(0);
    let navigate = useNavigate();
    const audio = new Audio(backgroundMusic);
    const [playAudio, setPlayAudio] = useState(true);

    useEffect(() => {
        if (playAudio) {
            // play() 메서드가 반환하는 Promise를 사용하여 play가 완료된 후 후속 작업을 합니다.
            audio.play().then(() => {
                // 여기에 play가 성공적으로 완료된 후의 코드를 작성할 수 있습니다.
            }).catch(error => {
                console.error("오디오 재생 오류:", error);
            });
            return () => {
                audio.pause();
            };
        }
    }, [playAudio]);

    const [trashItems, setTrashItems] = useState([
        // { id: 1, type: "plastic", name: "플라스틱", image: plasticImage },
        // { id: 2, type: "paper", name: "종이", image: paperImage },
        { id: 3, type: "비닐전용", name: "과자봉지", image: 과자봉지쓰레기 },
        { id: 4, type: "plastic", name: "병뚜껑", image: 병뚜껑쓰레기 },
        { id: 5, type: "비닐전용", name: "비닐봉지", image: 비닐봉지쓰레기 },
        { id: 6, type: "can", name: "스프레이용기", image: 스프레이용기쓰레기 },
        { id: 7, type: "폐건전지", name: "폐건전지", image: 폐건전지쓰레기 },
        { id: 8, type: "plastic", name: "플라스틱병", image: 플라스틱병쓰레기 },
        { id: 9, type: "plastic", name: "플라스틱빨대", image: 플라스틱빨대쓰레기 },
        { id: 10, type: "유리전용", name: "깨진유리쓰레기", image: 깨진유리쓰레기 },
        { id: 11, type: "paper", name: "종이팩쓰레기", image: 종이팩쓰레기 },
        { id: 12, type: "can", name: "캔쓰레기", image: 캔쓰레기 },
        { id: 13, type: "paper", name: "종이박스쓰레기", image: 종이박스쓰레기 },
        { id: 14, type: "plastic", name: "색깔플라스틱병쓰레기", image: 색깔플라스틱병쓰레기 },
        { id: 15, type: "plastic", name: "스티로폼쓰레기", image: 스티로폼쓰레기 },
        { id: 16, type: "유리전용", name: "유리병쓰레기", image: 유리병쓰레기 },
        { id: 16, type: "유리수거함", name: "의류쓰레기", image: 의류쓰레기 },
        { id: 16, type: "마대보관통", name: "영농폐기물", image: 영농폐기물 },
        { id: 16, type: "형광등쓰레기통", name: "형광등쓰레기", image: 형광등쓰레기 },
        { id: 16, type: "general", name: "달걀껍질쓰레기", image: 달걀껍질쓰레기 },
        // 추가 쓰레기 아이템들
    ]);                                                                     
    const bins = ["general", "paper", "plastic", "can", "폐건전지", "비닐전용", "유리전용", "의류수거함", "마대보관통", "형광등쓰레기통" /* 추가 수거함 타입들 */];

    const handleDrop = (isCorrectBin, item) => {
        const effectSound1 = new Audio(맞게들어감);
        const effectSound2 = new Audio(잘못넣음);

        if (isCorrectBin) {
            effectSound1.play();
            setScore(score + 1); // 점수 증가
            setTrashItems(prevItems => prevItems.filter(trash => trash.id !== item.id)); // 쓰레기 아이템 제거
            console.log("Correct!", item);
        } else {
            effectSound2.play();
            console.log("Wrong bin!", item);
        }
        // 드롭 로직 (예: 점수 증가)
    };

    const [showModal, setShowModal] = useState(false);
    const [showResultModal, setShowResultModal] = useState(false);
    
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleShowResult = () => {
        setShowResultModal(true);
    };
    const handleCloseResult = () => {
        setShowResultModal(false);
    };


    const handleTimeUp = () => {
        console.log('시간이 끝났습니다!');
        // 게임 종료 또는 다른 로직 처리
        handleShow();
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


    return (
        <>
        <div className='game-design'>
            <DndProvider backend={HTML5Backend}>
            {/* TrashItem 컴포넌트를 렌더링 */}
                <div className='game-design-score'>
                <ScoreBoard score={score} />
                </div>
                <div className='game-design-timer'>
                <Timer initialTime={10000} onTimeUp={handleTimeUp} />
                </div>
            <div className='game-design-item'>
            {/* {trashItems.map((trash, index) => (
                <TrashItem key={index} id={trash.id} type={trash.type} name={trash.name} image={trash.image} />
            ))} */}
            {shuffledTrashItems.map((trash, index) => (
            <div className="trash-item-display" >
            <TrashItem key={index} id={trash.id} type={trash.type} name={trash.name} image={trash.image}/>
            </div>
            ))}

            </div>
            {/* 필요한 경우 다른 컴포넌트 또는 내용 추가 */}
            <div className='game-design-bin'>
            {/* <TrashBin type="plastic" onDrop={handleDrop} /> */}
            {bins.map((type, index) => (
                <div className='game-design-bin2'>
                <TrashBin key={index} type={type} onDrop={handleDrop} />
                </div>
            ))}
            </div>
            </DndProvider>
        </div>
                <Modal show={showModal} onHide={handleClose} className='modal-design'>
                {/* <Modal.Header closeButton onHide={handleClose}>
                </Modal.Header> */}
                <Modal.Body>
                <p>제한 시간이 지났어요! <br/>  </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleShowResult}>결과 보기</Button>
                <Button variant="success" onClick={() => {
                    window.location.reload(); // 현재 페이지 새로고침
                }}>다시하기</Button>
                </Modal.Footer>
                </Modal>


                <Modal show={showResultModal} onHide={handleCloseResult} className='result-modal-design'>
                    <Modal.Body>
                        <p>우와 ~ {score}점!! </p>
                        {/* 이곳에 남은 시간을 표시하려면 해당 값을 상태로 관리하고 출력해야 합니다. */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseResult}>닫기</Button>
                        <Button variant="success" onClick={() => {
                            navigate('/'); // 현재 페이지 새로고침
                        }}>나가기</Button>
                    </Modal.Footer>
                </Modal>
                
        </>
        );
    }

    export default Game;