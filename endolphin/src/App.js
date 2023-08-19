import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap';
import { Routes, Route, useNavigate, Router } from 'react-router-dom';
import bg1 from './img/bg1.png';
import bg2 from './img/bg2.png';
import bg3 from './img/bg3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

function App() {
  
  let navigate = useNavigate();

  return (
    <>
    <div className='App'>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand className="title-location" onClick={()=>{ navigate('/') }}>Bully's Go</Navbar.Brand>
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
                > Bully's Go
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">로그인</Nav.Link>
                  <Nav.Link href="#action2">회원가입</Nav.Link>
                  <NavDropdown
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
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="ex) 치약, 우산 ..."
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-dark" className='search-button' style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>검색</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <Routes>
        <Route path='/' element={<>
          <div className='main'>
            <div className='main-writing'>
              <div className='main-writing-1'>Bully's Go와 함께하는</div>
              <div className='main-writing-2'>분리배출</div>

              <div className="input-area">
              <input type="text" className="input-box" placeholder="분리배출 방법이 궁금한 물건을 입력해보세요." />
              <div className='search-btn'><FontAwesomeIcon icon={faSearch} style={{color: "000000",}} fontSize="25px"/></div>
              </div>
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
            <Button className="primary-btn btn-custom" variant="primary" style={{ fontSize: '25px', color: '#fff', fontWeight: 'bold'}}>
              <span style={{ fontSize: '90px'}}>Q</span><br/> 퀴즈
            </Button>
            <Button className="success-btn btn-custom" variant="light" style={{ fontSize: '25px', color: '#fff', fontWeight: 'bold'}}>
              <span style={{ fontSize: '90px'}}>+</span><br/>그 외
            </Button>
          </div>

          <div className="campaign">
            <h4><a href="/">현재 진행 중인 캠페인</a></h4>
          </div>
          
        </>}/>

        {/* URL 파라미터 */}
        {/* <Route path='*' element={<>404</>}/> */}
      </Routes>
      </div>
    </>
  );
}

export default App;
