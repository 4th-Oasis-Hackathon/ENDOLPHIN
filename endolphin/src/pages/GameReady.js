import React from 'react';
import 쑥 from './imgs/쑥.png';
import 일반쓰레기통 from './imgs/일반쓰레기통.png';
import { Button } from 'react-bootstrap';

function GameReady() {
    return (
        <>
        <div className="game-main">
            <div className='game-main-writing-1'>쑥오와 함께하는</div>
            <div className='game-main-writing-2'>분리배출 게임</div>
        </div>

        <div className="game-main-bg">
            <div className="game-main-bg-1" style={{ backgroundImage: `url(${쑥})` }} />
            <div className='game-btn'>
                <Button>게임시작</Button>
                <Button>도움말</Button>
            </div>
            <div className="game-main-bg-2" style={{ backgroundImage: `url(${일반쓰레기통})` }} />
        </div>
        </>
    );
}

export default GameReady;
