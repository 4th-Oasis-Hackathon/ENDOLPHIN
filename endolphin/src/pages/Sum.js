import React, { useState, useEffect } from 'react';
import Game from './Game.js';
import NextStep from './NextStep.js';

function Sum() {
    const [scoreGame, setScoreGame] = useState(0);  // Game.js에서의 점수
    const [scoreNextStep, setScoreNextStep] = useState(0);  // NextStep.js에서의 점수

    const totalScore = scoreGame + scoreNextStep;  // 두 점수의 합

    return (
        <>
            <Game setScores={setScoreGame} />
            <NextStep setScores={setScoreNextStep} totalScore={totalScore} />
        </>
    );
}

export default Sum;
