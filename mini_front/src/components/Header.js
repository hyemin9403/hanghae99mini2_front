import React, {useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

// import {logoutM} from "../redux/modules/user";

import { history } from "../redux/configureStore";

import {Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {   
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  React.useEffect(async () => {
    console.log("유저 로그인 체크");
    dispatch(userActions.loginCheckM());
  }, []);

    const logout = () => {
    console.log("로그아웃 요청을 dispatch 했습니다.");

    dispatch(userActions.logoutM());
    }

    
    if(is_login) {
        return(
            <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Brand href="/">네가스터디</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                    <Nav.Link href="/">내정보</Nav.Link>
                    <Nav.Link eventKey={2} href="" onClick={logout}>
                        로그아웃
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        );
    };

        return (
            <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Brand href="/">네가스터디</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                    <Nav.Link href="/signup">회원가입</Nav.Link>
                    <Nav.Link eventKey={2} href="/login">
                        로그인
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        
        );
    
}

export default Header;