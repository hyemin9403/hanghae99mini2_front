import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { Container, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checkPassword, setCheckPassword] = React.useState("");

  const checkId = () => {
    if (id === "") {
      window.alert("공란입니다!")
      return
    }

    console.log(id,"의 중복확인 요청을 dispatch 했습니다.");

    dispatch(userActions.checkIdM(id, email, password));
  }

  const checkEmail = () => {
    if (email === "") {
      window.alert("공란입니다!")
      return;
    }

    console.log(email,"의 중복확인 요청을 dispatch 했습니다.");

    dispatch(userActions.checkEmailM(email));
  }

  const signup = (e) => {
    e.preventDefault()

    if (id === "" || email === "" || password === "" || checkPassword === "") {
      window.alert("공란입니다!")
      return;
    } else if (password !== checkPassword){
      window.alert("패스워드가 다릅니다.")
      return;
    }

    console.log(id, email, password, "의 회원가입 요청을 dispatch 했습니다.");

    dispatch(userActions.signupM(id, email, password));
  };


  return (
    <>
      <Container style={{ width: "550px"}}>
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
          <Form.Group className="mb-2">
            <Form.Label>아이디*</Form.Label>
            <div className="d-flex">
              <Form.Control
                className="col shadow-none"
                type="text"
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
              <Button className="col-md-auto shadow-none" variant="secondary" onClick={checkId}>
                중복확인
              </Button>
            </div>
            <Form.Text className="text-muted">
              아이디는 영문 3~15자입니다.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>이메일 주소*</Form.Label>
            <div className="d-flex">
              <Form.Control
                className="col shadow-none"
                type="email"
                placeholder="예) nikemania1987@nike.co.kr"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Button className="col-md-auto shadow-none" variant="secondary" onClick={checkEmail}>
                중복확인
              </Button>
            </div>
            <Form.Text className="text-muted">
              정확한 이메일 주소를 입력해주세요.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-2 ">
            <Form.Label>비밀번호*</Form.Label>
            <Form.Control
              type="password"
              className="shadow-none"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              비밀번호는 숫자, 영어 소문자, 특수문자 포함 8~15자 이내입니다.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-2 shadow-none">
            <Form.Label>비밀번호 확인*</Form.Label>
            <Form.Control
              type="password"
              className="shadow-none"
              onChange={(e) => {
                setCheckPassword(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              비밀번호를 다시 한번 확인해주세요.
            </Form.Text>
          </Form.Group>
          <Button
            variant="secondary"
            type="submit"
            style={{ width: "100%", hieght: "26px" }}
            onClick={signup}
          >
            가입하기
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Signup;
