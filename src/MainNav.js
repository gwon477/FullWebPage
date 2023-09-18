/* eslint-disable */

import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function MainNav() {
    // 페이지 이동 함수
    let navigate = useNavigate();

    return (
        <Navbar className="bg-white" expand="lg" bg="light" data-bs-theme="light" fixed="top">
            <Container>
                <Navbar.Brand onClick={() => { navigate('/') }}>
                    <img
                        alt=""
                        src='img/logo-nav.png'
                        width="100"
                        height="30"
                        className="d-inline-block align-top"
                    />        
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/members') }}>Members</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/blog') }}>Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNav;