import React from "react";
import { Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "../elements/Grid";

const PostDetail = () => {
  return (
    <Container style={{ width: "900px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "30px",
            background: "green",
            borderRadius: "10px",
            color: "white",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          모집완료
        </div>
        <div style={{ marginLeft: "20px", fontSize: "20px" }}>2 / 5 명</div>
      </div>
      <div style={{ display: "flex", marginBottom: "30px" }}>
        <h2>Java</h2>
      </div>
      <h1 style={{ display: "flex", marginBottom: "30px" }}>
        같이 자바 공부해봐요
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <div style={{ display: "flex" }}>
          <p
            style={{
              fontWeight: "bold",
              marginBottom: "0px",
            }}
          >
            nikemania1987
          </p>
          <p style={{ margin: "0px 0px 0px 10px" }}>
            2022년 02월 12일 22시 10분
          </p>
        </div>
        <button style={{ marginLeft: "auto" }}>참여하기</button>
      </div>
      <hr style={{ marginBottom: "50px" }} />
      <div
        style={{ width: "100%", height: "800px", border: "1px solid black" }}
      />
    </Container>
  );
};

export default PostDetail;
