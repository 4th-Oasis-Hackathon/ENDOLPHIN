import React from 'react';
import 쑥 from './imgs/쑥.png';
import 일반쓰레기통 from './imgs/일반쓰레기통.png';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function QuizReady() {

    let navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
        <div className="game-main">
            <div className='game-main-writing-1'>쑥오와 함께하는</div>
            <div className='game-main-writing-2'>분리수거(배출) 퀴즈</div>
        </div>

        <div className="game-main-bg">
            <div className="game-main-bg-1" style={{ backgroundImage: `url(${쑥})` }} />
            <div className='game-btn'>
                <Button variant="light" className='game-btn-1' onClick={ handleShow }>게임시작</Button>
                <Button variant="light" className='game-btn-2'>도움말</Button>
            </div>
            <div className="game-main-bg-2" style={{ backgroundImage: `url(${일반쓰레기통})` }} />
        </div>

        <Modal show={showModal} onHide={handleClose} className='modal-design'>
            <Modal.Header closeButton>
            {/* <Modal.Title>분리수거 게임</Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
            <p>분리수거 퀴즈 시작 !</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>안 할래요</Button>
            <Button variant="success" onClick={()=>{
                navigate('/quiz');
            }}>바로 시작할게요</Button>
            </Modal.Footer>
        </Modal>

        </>
    );
}

export default QuizReady;
