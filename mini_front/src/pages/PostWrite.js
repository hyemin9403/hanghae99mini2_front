import React, {useState, useEffect} from "react";
import "../shared/App.css"
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";


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

  const editPost = () => {
    console.log("클릭됨");
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
          {/* category */}
          <div
            style={{
              display: "flex",
            }}
          >
            <ButtonA color={clicked}
            id="1"
            value={"Java"}
              style={{ width: "100px", height: "40px", marginRight: "10px" }}
              onClick={categorySelect}
              onChange={handleChangeColor}
            >
              Java
            </ButtonA>
            <ButtonA color={clicked}
            id="2"
            value={"React"}
              style={{ width: "100px", height: "40px", marginRight: "10px" }}
              onClick={(e) => setCategory(e.target.value)}
              onChange={handleChangeColor}
            >
              React
            </ButtonA>
            <ButtonA color={clicked}
            id="3"
            value={"Python"}
              style={{ width: "100px", height: "40px" }}
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
          onChange={(e) => {
            setmemberNum(e.target.value)
          }}
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
        <input style={{ marginLeft: "50px", width: "400px" }} type="text"
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
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
          onChange={(e) => {
            setContent(e.target.value)
          }}
        />
      </div>
      <button
      style={{ width: "100px", height: "40px", marginRight: "10px" }}
        onClick={addPost}
        text="저장하기"
        width="200px"
        margin="20px"
      ></button>
      <button
      style={{ width: "100px", height: "40px", marginRight: "10px" }}
        onClick={editPost}
        text="수정하기"
        width="200px"
        margin="20px"
      >수정하기</button>
    </>
  );
};

const ButtonA = styled.button`
  background-color: ${props => props.color};
  color: white;
`;

export default PostWrite;