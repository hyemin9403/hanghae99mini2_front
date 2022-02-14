import React, { useEffect, useState } from "react";
import Button from "../elements/Button";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PostWrite = () => {
  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  const GetClick = (e) => {
    setCurrentClick(e.target.id);
  };

  useEffect(
    (e) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        current.style.color = "black";
      }

      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.style.color = "#bebcbc";
      }
      setPrevClick(currentClick);
    },
    [currentClick]
  );

  return (
    <>
      <Container style={{ width: "900px" }}>
        <div
          style={{
            height: "300px",
            display: "flex",
            flexDirection: "column",
            alignItmes: "center",
            justifyContent: "center",
          }}
        >
          <h1>네가스터디</h1>
          <h3>다양한 스터디를 함께 모집해봐요</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "150px",
          }}
        >
          <h1
            style={{
              textAlign: "left",
            }}
          >
            스터디 주제
          </h1>
          <div
            style={{
              display: "flex",
            }}
          >
            <button
              style={{ width: "100px", height: "40px", marginRight: "10px" }}
              id="case1"
              value="1"
              onClick={GetClick}
            >
              Java
            </button>
            <button
              style={{ width: "100px", height: "40px", marginRight: "10px" }}
              id="case2"
              value="2"
              onClick={GetClick}
            >
              React
            </button>
            <button
              style={{ width: "100px", height: "40px" }}
              id="case3"
              value="3"
              onClick={GetClick}
            >
              Python
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "150px",
          }}
        >
          <h1
            style={{
              textAlign: "left",
            }}
          >
            모집인원
          </h1>
          <input
            style={{
              width: "200px",
              height: "40px",
              border: "1px solid silver",
              borderRadius: "3px",
              padding: "10px",
            }}
            type="number"
            name="number_select"
            min="1"
            max="10"
            placeholder="1"
          />
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", height: "150px" }}
        >
          <h1
            style={{
              textAlign: "left",
            }}
          >
            제목
          </h1>
          <InputGroup className="mb-3 inputTitle">
            <FormControl
              placeholder="제목을 입력해주세요"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ textAlign: "left" }}>내용</h1>
          <InputGroup>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              style={{ height: "500px" }}
              placeholder="내용을 입력해주세요"
            />
          </InputGroup>
        </div>
        <div style={{ float: "right" }}>
          <button style={{
            margin: "20px",
            width: "200px",
            height: "40px",
            borderRadius: "15px",
            backgroundColor: "green",
            color: "white",
            fontSize: "20px"
          }}>저장하기</button>
        </div>
      </Container>
    </>
  );
};

export default PostWrite;
