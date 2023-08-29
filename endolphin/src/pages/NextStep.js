/* global Kakao */ 
import React, { useRef, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundMusic from './bgm/Sand Castle - Quincas Moreira.mp3'; 
import 맞게들어감 from './bgm/맞게들어감.mp3'; 
import 잘못넣음 from './bgm/잘못넣음.mp3';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TrashItem from './TrashItem.js';
import TrashBin from './TrashBin.js';
import Timer from './Timer.js';
import ScoreBoard from './ScoreBoard';
import { useState } from 'react';
import 폐건전지쓰레기 from './imgs/폐건전지쓰레기.png';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 의류쓰레기 from './imgs/의류쓰레기.png';
import 영농폐기물 from './imgs/영농폐기물.png';
import 형광등쓰레기 from './imgs/형광등쓰레기.png';
import 달걀껍질쓰레기 from './imgs/달걀껍질쓰레기.png'
import 따봉쑤기 from './imgs/따봉쑤기.png';

import 깨진유리쓰레기 from './imgs/깨진유리쓰레기.png'
import 유리병쓰레기 from './imgs/유리병쓰레기.png'
import 종이팩쓰레기 from './imgs/종이팩쓰레기.png'
import 종이컵쓰레기 from './imgs/종이컵쓰레기.png'


function NextStep() {

    const [trashItems, setTrashItems] = useState([
        { id: 11, type: "폐건전지", name: "폐건전지", image: 폐건전지쓰레기 },
        { id: 12, type: "의류수거함", name: "의류쓰레기", image: 의류쓰레기 },
        { id: 13, type: "마대보관통", name: "영농폐기물", image: 영농폐기물 },
        { id: 14, type: "형광등쓰레기통", name: "형광등쓰레기", image: 형광등쓰레기 },
        { id: 15, type: "general", name: "달걀껍질쓰레기", image: 달걀껍질쓰레기 },
        { id: 16, type: "general", name: "깨진유리쓰레기", image: 깨진유리쓰레기 },
        { id: 17, type: "유리전용", name: "유리병쓰레기", image: 유리병쓰레기 },
        { id: 18, type: "종이팩전용", name: "종이팩쓰레기", image: 종이팩쓰레기 },
        { id: 19, type: "종이팩전용", name: "종이컵쓰레기", image: 종이컵쓰레기 },
    ]);     
    const bins = [ "general", "폐건전지", "유리전용","종이팩전용", "의류수거함", "마대보관통", "형광등쓰레기통"/* 추가 수거함 타입들 */];
    //"general", "paper", "plastic", "can", "비닐전용"                         //, "폐건전지", "유리전용", "의류수거함", "마대보관통", "형광등쓰레기통"
    const [score, setScore] = useState(0);
    let navigate = useNavigate();
    const bgmRef = useRef(null);

    const audio = new Audio(backgroundMusic);
    const [playAudio, setPlayAudio] = useState(true);

    const shareWithParents = () => {
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: '쑤기와 함께하는 분리배출',
                description: `엄마, 아빠 제 점수는 ${score}점이에요!`,
                imageUrl: '게임 결과 이미지 URL', // 예: 게임 결과 스크린샷
                link: {
                    webUrl: '게임 웹사이트 URL',
                    mobileWebUrl: '게임 모바일 웹사이트 URL'
                }
            },
        });
    }

    useEffect(() => {
        if (playAudio) {
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

    useEffect(() => {
        if (bgmRef.current) {
            bgmRef.current.volume = 0.03; 
            bgmRef.current.play();

            // 음악이 끝나면 다시 시작
            bgmRef.current.addEventListener('ended', () => {
                bgmRef.current.currentTime = 0;
                bgmRef.current.play();
            });
        }
    }, []);

                                                                    
    
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

    useEffect(() => {
        if (trashItems.length === 0) {
            setShowResultModal(true);
        }
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
            {shuffledTrashItems.map((trash, index) => (
            <div className="trash-item-display" >
            <TrashItem key={index} id={trash.id} type={trash.type} name={trash.name} image={trash.image}/>
            </div>
            ))}

            </div>
            <div className='game-design-bin'>
            {bins.map((type, index) => (
                <div className='game-design-bin2'>
                <TrashBin key={index} type={type} onDrop={handleDrop} />
                </div>
            ))}
            </div>
            </DndProvider>
        </div>
                <Modal show={showModal} onHide={handleClose} className='modal-design custom-cursor'>
                <Modal.Body>
                <p>제한 시간이 지났어요! <br/>  </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"className='custom-cursor' onClick={handleShowResult}>결과 보기</Button>
                <Button variant="success" className='custom-cursor' onClick={() => {
                    window.location.reload(); // 현재 페이지 새로고침
                }}>다시하기</Button>
                </Modal.Footer>
                </Modal>


                <Modal show={showResultModal} onHide={handleCloseResult} className='result-modal-design custom-cursor'>
                    <Modal.Body className="modaal-body-style">
                    {score >= 3 && <img src={따봉쑤기} className='good-ssuk' />}
                        <p className='modal-score-style'>우와 ~ {score}점!! <br/> 분리배출을 아주 잘 하는걸 ! </p> 
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" className='custom-cursor' onClick={shareWithParents}> 엄마, 아빠에게 자랑하기</Button>
                        <Button variant="success" className='custom-cursor' onClick={() => {
                            navigate('/'); // 현재 페이지 새로고침
                        }}>나가기</Button>
                    </Modal.Footer>
                </Modal>
        </>
        );
    }

    export default NextStep;