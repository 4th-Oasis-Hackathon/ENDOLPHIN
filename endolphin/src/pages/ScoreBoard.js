import React from 'react';

function ScoreBoard({ score }) {
    return (
        <div className="score-board">
            <h4 className="score-board-1">현재 점수</h4>
            <h1 className="score-board-2">{score}</h1>
        </div>
    );
}

export default ScoreBoard;
