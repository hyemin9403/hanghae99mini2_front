import React from "react";

import {Container,  Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  return (
    <>
      <h1>회원가입 페이지 입니다</h1>
      <Container style={{width:"550px"}}>
        <div class="d-flex flex-column justify-content-center align-items-center mb-5">
          <h1 className="Gothic-900">네가스터디</h1> 
          <h6>다양한 스터디를 함께 모집해봐요</h6>
        </div>
        <Form style={{border:"1px solid #222", padding:"24px", borderRadius:"5px"}}>
          <Form.Group className="mb-2">
            <Form.Label>아이디*</Form.Label>
            <Form.Control type="text"/>
            <Form.Text className="text-muted">아이디는 영문 3~15자입니다.</Form.Text>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>이메일 주소*</Form.Label>
            <Form.Control type="email"/>
            <Form.Text className="text-muted">아이디는 영문 3~15자입니다.</Form.Text>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>비밀번호*</Form.Label>
            <Form.Control type="password"/>
            <Form.Text className="text-muted">비밀번호는 숫자, 영어 소문자, 특수문자 포함 8~15자 이내입니다.</Form.Text>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>비밀번호 확인*</Form.Label>
            <Form.Control type="password"/>
            <Form.Text className="text-muted">비밀번호는 숫자, 영어 소문자, 특수문자 포함 8~15자 이내입니다.</Form.Text>
          </Form.Group>
          <Button variant="secondary" type="submit" style={{width:"100%",hieght:"26px"}}>로그인</Button>
        </Form>
     </Container>
    </>
  );
};

export default Signup;


