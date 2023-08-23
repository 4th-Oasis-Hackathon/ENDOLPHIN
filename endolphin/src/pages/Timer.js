import React, { useState, useEffect } from 'react';

function Timer({ initialTime, onTimeUp }) {
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
    // 타이머 설정
    const timerID = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
    }, 1000);

    // 타이머가 0이 되면 종료
    if (time <= 0) {
        clearInterval(timerID);
        onTimeUp(); // 시간이 끝나면 부모 컴포넌트에 알림
    }

    // 컴포넌트가 언마운트 될 때 타이머 정리
    return () => {
        clearInterval(timerID);
    };
    }, [time, onTimeUp]);

    return <div className="timer-sec">{time}초</div>;
}

export default Timer;
