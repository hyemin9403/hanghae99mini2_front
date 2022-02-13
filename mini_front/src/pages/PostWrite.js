import React from "react";
import Button from "../elements/Button";

const PostWrite = () => {
  return (
    <>
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
            marginLeft: "50px",
            textAlign: "left",
          }}
        >
          스터디 주제
        </h1>
        <div
          style={{
            width: "500px",
            height: "50px",
            display: "flex",
            marginLeft: "50px",
          }}
        >
          <Button margin="0px 10px 0px 0px">Java</Button>
          <Button>React</Button>
          <Button margin="0px 10px">Python</Button>
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
            marginLeft: "50px",
            textAlign: "left",
          }}
        >
          모집인원
        </h1>
        <input
          style={{
            marginLeft: "50px",
            width: "200px",
          }}
          type="number"
          name="number_select"
          min="1"
          max="10"
        />
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", height: "150px" }}
      >
        <h1
          style={{
            marginLeft: "50px",
            textAlign: "left",
          }}
        >
          제목
        </h1>
        <input style={{ marginLeft: "50px", width: "400px" }} type="text" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ marginLeft: "50px", textAlign: "left" }}>내용</h1>
        <input
          style={{
            marginLeft: "50px",
            width: "800px",
            height: "500px",
            // textAlignVertical: "top",
          }}
          type="text"
        />
      </div>
      <Button text="저장하기" width="200px" margin="20px"></Button>
    </>
  );
};

export default PostWrite;
