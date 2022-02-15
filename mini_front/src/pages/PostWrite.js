import React, {useState, useEffect} from "react";
import "../shared/App.css"
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import { actionCreators as postActions } from "../redux/modules/post";

const PostWrite = (props) => {
  const [category, setCategory] = React.useState("");
  const [name, setName] = React.useState("");
  const [memberNum, setmemberNum] = React.useState("");
  const [content, setContent] = React.useState("");
  const [clicked, setClicked] = React.useState("black")
  const [isBlack, setIsBlack] = React.useState(true);

  const handleChangeColor = (e) => {
    setIsBlack(!isBlack);
    setClicked(isBlack ? '#CCCCCC' : 'black');
  }

  const dispatch = useDispatch();

  const post_id = props.match.params.id

  const editPost = (post_id) => {
    console.log(post_id);
    dispatch(postActions.editPostM(post_id, {category: category, name: name, content: content, memberNum: memberNum}));
  }

  const addPost = () => {
    console.log("클릭됨");

    console.log(category)
    console.log(content)
    console.log(memberNum);
    console.log(name);

    const contents = {
      category: category,
      name: name,
      content: content,
      memberNum: memberNum
    }
    dispatch(postActions.addPostM(contents))
  };



  const categorySelect = (e) => {
    setCategory(e.target.value)
    // clicked === "grey" ? setClicked("Black") : setClicked("grey");
  }


  return (
    <>
    <Container style={{width: "550px"}}>
      <div className="writeTop">
        <h1>네가스터디</h1>
        <h3>다양한 스터디를 함께 모집해봐요</h3>
      </div>
      {/* category */}
      <div className="studyCategory">
          <h1 style={{textAlign: "left"}}>
            스터디 주제
          </h1>
          <div style={{ display: "flex"}}>
            <ButtonA
            id="1"
            value={"Java"}
              style={{ marginRight: "10px" }}
              onClick={categorySelect}
              onChange={handleChangeColor}
            >
              Java
            </ButtonA>
            <ButtonA 
            id="2"
            value={"React"}
              style={{ marginRight: "10px" }}
              onClick={(e) => setCategory(e.target.value)}
              onChange={handleChangeColor}
            >
              React
            </ButtonA>
            <ButtonA
            id="3"
            value={"Python"}
              onClick={(e) => setCategory(e.target.value)}
              onChange={handleChangeColor}
            >
              Python
            </ButtonA>
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
            marginLeft: "30px",
          }}
        >
          모집인원
        </h1>
        <input
          style={{
            marginLeft: "30px",
            width: "20vh",
          }}
          type="number"
          name="number_select"
          min="1"
          max="10"
          onChange={(e) => {
            setmemberNum(e.target.value)
          }}
        />
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", height: "150px" }}
      >
        <h1 style={{marginLeft: "30px"}}>
          제목
        </h1>
        <input 
          style={{ marginLeft: "30px", width: "50vh" }} 
          type="text"
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ marginLeft: "30px"}}>내용</h1>
        <input 
          style={{
            marginLeft: "30px",
            width: "80vh",
            height: "80vh",
          }}
          type="text"
          onChange={(e) => {
            setContent(e.target.value)
          }}
        />
      </div>
      <div style={{display: "flex", margin: "20px 0px 0px 30px", }}>
      <ButtonA
      style={{ marginRight: "10px" }}
        onClick={addPost}
        text="저장하기"
      >
        저장하기
      </ButtonA>
      <ButtonA
        onClick={editPost}
        text="수정하기"
      >
        수정하기
      </ButtonA>
      </div>
      </Container>
    </>
  );
};

const ButtonA = styled.button`
  background-color: gray;
  
  color: white;
  width: 100px; 
  height: 40px; 
`;

export default PostWrite;