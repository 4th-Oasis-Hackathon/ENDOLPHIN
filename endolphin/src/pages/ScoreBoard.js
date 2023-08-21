import React from 'react';

function ScoreBoard({ score }) {
    return (
        <div className="score-board">
            <h2>점수판</h2>
            <p>점수: {score}</p>
        </div>
    );
}

export default ScoreBoard;
