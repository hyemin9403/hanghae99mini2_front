import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { Container, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = (e) => {
    e.preventDefault();

    if (id === "" ||  password === "") {
      console.log("공란입니다!")
      return;
    } 

    console.log(id, password, "의 로그인 요청을 dispatch 했습니다.");

    dispatch(userActions.loginM(id, password));
  };


  return (
    <>
      <Container style={{ width: "550px" }}>
        <div className="d-flex flex-column justify-content-center align-items-center mb-5 mt-5">
          <h1 className="Gothic-900">네가스터디</h1>
          <h6>다양한 스터디를 함께 모집해봐요</h6>
        </div>
        <Form
          style={{
            border: "1px solid #222",
            padding: "24px",
            borderRadius: "5px",
          }}
        >
          <Form.Group className="mb-3">
            <Form.Label>아이디</Form.Label>
            <Form.Control
              type="text"
              className="shadow-none"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <Form.Text className="text-muted">아이디를 입력하세요.</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              type="password"
              className="shadow-none"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Form.Text className="text-muted">비밀번호를 입력하세요.</Form.Text>
          </Form.Group>
          <Button
            variant="secondary"
            type="submit"
            style={{ width: "100%", hieght: "26px" }}
            onClick={login}
          >
            로그인
          </Button>
          <div
            className="d-flex justify-content-center mt-3"
            style={{ height: "20px", lineHeight: "20px" }}
          >
            <a
              className="text-muted px-2 "
              href="/signup"
              style={{
                textDecoration: "none",
                fontSize: ".875em",
                borderRight: "2px solid #eee",
              }}
            >
              회원가입
            </a>
            <p
              className="text-muted px-2"
              style={{
                textDecoration: "none",
                fontSize: ".875em",
                borderRight: "2px solid #eee",
                height: "20px",
                lineHeight: "20px",
              }}
            >
              이메일 찾기
            </p>
            <p
              className="text-muted px-2"
              style={{
                fontSize: ".875em",
              }}
            >
              비밀번호찾기
            </p>
          </div>
        </Form>
      </Container>
    </>
  );
};  

export default Login;
