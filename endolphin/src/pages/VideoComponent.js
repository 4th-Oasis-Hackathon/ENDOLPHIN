import React, { useEffect } from 'react';
import videoSrc from './bgm/쑤기뛰어감.mp4';
import Game from './Game';
import { Routes, Route, useNavigate, Router } from 'react-router-dom';


function VideoComponent() {
    let navigate = useNavigate();
    const videoRef = React.useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }

        const timer = setTimeout(() => {
            navigate('/game');
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = false;
        }
    }, []);

    return (
        <>
        <div className="video-container">
            <video ref={videoRef} utoPlay loop muted className="background-video">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
        <Routes>
            <Route path='/game' element={<Game/>}/>
        </Routes>
        </>
    );
    }

export default VideoComponent;
