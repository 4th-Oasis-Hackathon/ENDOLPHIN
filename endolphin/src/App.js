import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap';
import { Routes, Route, useNavigate, Router } from 'react-router-dom';
import bg1 from './img/bg1.png';
import bg2 from './img/bg2.png';
import bg3 from './img/bg3.png';
import 쑥 from './img/쑥.png';
import 쑥5 from './img/쑥5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import Campaign from './pages/Campaign';
import { useState } from 'react';
import ItemPage from './pages/ItemPage';
import data from './data';
import Game from './pages/Game';
import Quiz from './pages/Quiz';
import GameReady from './pages/GameReady';
import QuizReady from './pages/QuizReady';

function App() {
  
  let navigate = useNavigate();

  const [inputValue, setInputValue] = useState(''); // 입력 값을 관리하는 state
  const [searchText, setSearchText] = useState('');

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
    <div className='App'>
      {['md'].map((expand) => (
        <Navbar expand={false} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand className="title-location" onClick={()=>{ navigate('/') }}>
              분리<span className="highlight">쑥</span>오
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
                <Offcanvas.Title className="title-location" id={`offcanvasNavbarLabel-expand-${expand}`}
                // style={{fontWeight: 'bold', textAlign: 'right', cursor: 'pointer'}}
                onClick={()=>{navigate('/')}}
                > 분리<span className="highlight">쑥</span>오
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link> <img
                  src={쑥}
                  width="30"                    
                  height="30"                  
                  className="d-inline-block align-top"/>출석하기</Nav.Link>
                  <Nav.Link onClick={()=>{navigate('/quiz_ready')}}>
                    <img
                    src={쑥}
                    width="30"                    
                    height="30"                  
                    className="d-inline-block align-top"/>쑥오퀴즈</Nav.Link>
                  <Nav.Link onClick={()=>{navigate('/game_ready')}}>
                  <img
                  src={쑥}
                  width="30"                    
                  height="30"                  
                  className="d-inline-block align-top"/>쑥오게임</Nav.Link>
                  {/* <NavDropdown
                    title="마이페이지"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <Routes>
        <Route path='/' element={<>
          <div className='main'>
            <div className='main-writing'>
              <div className='main-writing-1'>쑥오와 함께하는</div>
              <div className='main-writing-2'>분리배출</div>

              <form onSubmit={handleSearchFormSubmit} className="input-area">
              <input type="text" className="input-box" placeholder="분리배출 방법이 궁금한 물건을 입력해보세요." 
                value={searchText} onChange={e => setSearchText(e.target.value)}
                onClick={() => setSearchText('')}
              />
              <div className='search-btn' onClick={() => handleSearch(searchText)}><FontAwesomeIcon icon={faSearch} style={{color: "000000",}} fontSize="25px"/></div>
              </form>
              </div>

            <div className="main-bg">
              <div className="main-bg-1" style={{ backgroundImage: `url(${bg1})` }} />
              <div className="main-bg-2" style={{ backgroundImage: `url(${bg2})` }} />
              <div className="main-bg-3" style={{ backgroundImage: `url(${bg3})` }} />
            </div>
          </div>

          {/* <div>
          <Button variant="info" size="lg" className='info-btn-container info-btn'>
          Large button
          </Button>{' '} */}
          <div className="btn-container">
            <Button className="info-btn btn-custom" variant="info" style={{ fontSize: '25px', color: '#fff', fontWeight: 'bold' }}>
              <span style={{ fontSize: '90px'}}>✓</span><br/> 출석하기
            </Button>
            <Button 
              onClick={()=>{ navigate('/quiz_ready') }}
              className="primary-btn btn-custom" variant="primary" style={{ fontSize: '25px', color: '#fff', fontWeight: 'bold'}}>
              <span style={{ fontSize: '90px'}}>Q</span><br/> 퀴즈
            </Button>
            <Button
              onClick={()=>{ navigate('/game_ready') }}
              className="success-btn btn-custom" variant="light" style={{ fontSize: '25px', color: '#fff', fontWeight: 'bold'}}>
              <span style={{ fontSize: '90px'}}>⚐</span><br/>게임
            </Button>
          </div>

          <div className="campaign">
            <h4><a onClick={()=>{ navigate('/Campaign') }}>현재 진행 중인 캠페인</a></h4>
          </div>

        </>}/>

        {/* URL 파라미터 */}
        {/* <Route path='/paper' element={<PaperPage/>}/> */}
        <Route path='/item/:id' element={<ItemPage/>}/>
        <Route path='/Campaign' element={<Campaign/>}/>
        <Route path='/game' element={<Game/>}/>
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
