import React from 'react';
import 쑥 from './imgs/쑥.png';
import 일반쓰레기통 from './imgs/일반쓰레기통.png';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function GameReady() {

    let navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
        <div className="game-main">
            <div className='game-main-writing-1'>쑥오와 함께하는</div>
            <div className='game-main-writing-2'>분리수거(배출) 게임</div>
        </div>

        <div className="game-main-bg">
            <div className="game-main-bg-1" style={{ backgroundImage: `url(${쑥})` }} />
            <div className='game-btn'>
                <Button variant="light" className='game-btn-1' onClick={ handleShow }>게임시작</Button>
                <Button variant="light" className='game-btn-2'>도움말</Button>
            </div>
            <div className="game-main-bg-2" style={{ backgroundImage: `url(${일반쓰레기통})` }} />
        </div>

        <Modal show={showModal} onHide={handleClose} className='modal-cursor modal-design'>
            <Modal.Header closeButton className='modal-cursor'>
            {/* <Modal.Title>분리수거 게임</Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
            <p>분리수거 타임어택 게임 시작 ! <br/> 제한시간은 1분이고 게임은 바로 시작됩니다. </p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" className='modal-cursor' onClick={handleClose}>취소</Button>
            <Button variant="success"className='modal-cursor' onClick={()=>{
                navigate('/game');
            }}>시작하기</Button>
            </Modal.Footer>
        </Modal>

        </>
    );
}

export default GameReady;
