import React, { useEffect } from 'react';
import videoSrc from './bgm/쑤기뛰어감.mp4';
import Game from './Game';
import { Routes, Route, useNavigate } from 'react-router-dom';

function VideoComponent() {
    let navigate = useNavigate();
    const videoRef = React.useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Video play error:", error);
            });
        }

        const timer = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.pause();
            }
            navigate('/game');
        }, 3000);

        return () => {
            clearTimeout(timer);
            if (videoRef.current) {
                videoRef.current.pause();
            }
        };
    }, []);

    return (
        <>
        <div className="video-container">
            <video ref={videoRef} autoPlay loop className="background-video">
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
