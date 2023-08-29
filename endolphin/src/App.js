/* global Kakao */ 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap';
import { Routes, Route, useNavigate, Router } from 'react-router-dom';
import 쑥 from './img/쑥.png';
import 최종쑤기 from './img/최종쑤기.png';
import 쑥5 from './img/쑥5.png';
import 게임전체배경 from './img/게임전체배경.png';
import 쑤기와함께하는 from './img/쑤기와함께하는.png';
import 쑤기랑함께하는 from './img/쑤기랑함께하는.png';
import 분리배출 from './img/분리배출.png';
import 쓰레기차 from './img/쓰레기차.png';
import 최종쓰레기차 from './img/최종쓰레기차.png';
import 게임시작버튼 from './img/게임시작버튼.png';
import { useState } from 'react';
import ItemPage from './pages/ItemPage';
import data from './data';
import Game from './pages/Game';
import Quiz from './pages/Quiz';
import GameReady from './pages/GameReady';
import QuizReady from './pages/QuizReady';
import NextStep from './pages/NextStep';
import Campaign from './pages/Campaign';
import { useLocation } from 'react-router-dom';
import VideoComponent from './pages/VideoComponent';
import { useEffect } from 'react';

function App() {
  
  let navigate = useNavigate();

  const [inputValue, setInputValue] = useState(''); // 입력 값을 관리하는 state
  const [searchText, setSearchText] = useState('');


useEffect(() => {
  if (!Kakao.isInitialized()) {
      Kakao.init('a2cb9f15e4727685ac12b5d908d19dd6');
  }
}, []);


  const handleSearchFormSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 막기
    handleSearch(searchText); // 검색 처리
  };

  const handleSearch = (searchText) => {
    if (!searchText.trim()) {
      navigate('*');
      return;
    }

    const result = data.find(item => item.name.includes(searchText));
    if (result) {
      // 이동할 페이지 설정 (예: '/paper')
      navigate(`/item/${result.id}`);
    } else {
      navigate('*');
    }

  };
  
  

  return (
    <>
    <div className='custom-cursor' >
      {['md'].map((expand) => (
        <Navbar expand={false} className="bg-body-tertiary mb-3 custom-cursor">
          <Container fluid>
            <Navbar.Brand className="title-location custom-cursor" onClick={()=>{ navigate('/') }}>
              분리<span className="highlight custom-cursor">쑥</span>오
              <img 
                src={쑥}
                // alt="Bully's Go"              
                width="40"                    
                height="40"                  
                className="d-inline-block align-top logo-img"/>
              </Navbar.Brand>
            {/* <Navbar.Brand>Bully's Go</Navbar.Brand> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="title-location custom-cursor" id={`offcanvasNavbarLabel-expand-${expand}`}
                // style={{fontWeight: 'bold', textAlign: 'right', cursor: 'pointer'}}
                onClick={()=>{navigate('/')}}
                > 분리<span className="highlight">쑥</span>오
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={()=>{navigate('/game_ready')}}>
                  <img
                  src={쑥}
                  width="30"                    
                  height="30"                  
                  className="d-inline-block align-top"/>쑥오게임</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <Routes>
        
        <Route path='/' element={<>
        <div className='AppBG'>
          <img 
              src={쑤기랑함께하는} 
              className="ssuk-with" 
            />

          <img 
              src={분리배출} 
              className="bunli-location" 
            />
          <div className='main-character-location'>
            <img 
                src={최종쑤기} 
                className="ssuk-location" 
              />
            <img 
                src={게임시작버튼} 
                className="game-start-btn" 
                onClick={() => {navigate('/video')}}
              />
            <img 
                src={최종쓰레기차} 
                className="trashcar-location" 
              />
          </div>
          </div>
        </>}/>

        {/* URL 파라미터 */}
        {/* <Route path='/paper' element={<PaperPage/>}/> */}
        <Route path='/item/:id' element={<ItemPage/>}/>
        <Route path='/Campaign' element={<Campaign/>}/>
        <Route path='/video' element={<VideoComponent/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/game_step2' element={<NextStep/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/game_ready' element={<GameReady/>}/>
        <Route path='/quiz_ready' element={<QuizReady/>}/>
        <Route path='*' element={<>404</>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
