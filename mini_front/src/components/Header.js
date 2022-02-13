import React from "react";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import {logoutM} from "../redux/modules/user";

import { history } from "../redux/configureStore";

import {Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {   
  const dispatch = useDispatch();

    const logout = () => {
    console.log("로그아웃 요청을 dispatch 했습니다.");

    dispatch(logoutM());
    }
    
        return (
            <>  
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">네가스터디</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link href="/signup">회원가입</Nav.Link>
                    <Nav.Link eventKey={2} href="/login">로그인</Nav.Link>
                    <Nav onClick={logout}>로그아웃</Nav>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </>
        
        );
    
}

export default Header;