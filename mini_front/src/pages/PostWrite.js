import React from "react";
import "../shared/App.css";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { actionCreators as postActions } from "../redux/modules/post";

const PostWrite = (props) => {
  const dispatch = useDispatch();

  const post_list = useSelector((state) => state.post.list);
  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;

  let _post = is_edit
    ? post_list.find((p) => p.id.toString() === post_id)
    : null;

  const [category, setCategory] = React.useState(_post ? _post.category : "");
  const [name, setName] = React.useState(_post ? _post.name : "");
  const [memberNum, setmemberNum] = React.useState(
    _post ? _post.memberNum : ""
  );
  const [content, setContent] = React.useState(_post ? _post.content : "");

  const editPost = () => {
    const _contents = {
      name: name,
      category: category,
      content: content,
      memberNum: memberNum,
    };
    dispatch(postActions.editPostM(post_id, _contents));
  };

  const addPost = () => {
    const contents = {
      category: category,
      name: name,
      content: content,
      memberNum: memberNum,
    };
    dispatch(postActions.addPostM(contents));
  };

  const categorySelect = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <Container style={{ width: "950px" }}>
        <div className="writeTop">
          <h1>네가스터디</h1>
          <h3>다양한 스터디를 함께 모집해봐요</h3>
        </div>
        {/* category */}
        <div className="studyCategory">
          <h1 style={{ textAlign: "left" }}>스터디 주제</h1>
          <div style={{ display: "flex" }}>
            <button
              id="1"
              value={"Java"}
              className="categoryJava"
              onClick={categorySelect}
            >
              Java
            </button>
            <button
              id="2"
              value={"React"}
              className="categoryReact"
              onClick={(e) => setCategory(e.target.value)}
            >
              React
            </button>
            <button
              id="3"
              value={"Python"}
              className="categoryPython"
              onClick={(e) => setCategory(e.target.value)}
            >
              Python
            </button>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", height: "150px" }}
        >
          <h1 style={{ marginLeft: "30px" }}>모집인원</h1>
          <input
            style={{ marginLeft: "30px",
            padding: "20px",
            width: "30%",
            border: "1px solid #9C9C9C",
            borderRadius: "10px", }}
            type="number"
            name="number_select"
            min="1"
            max="10"
            value={memberNum}
            onChange={(e) => {
              setmemberNum(e.target.value);
            }}
          />
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", height: "150px" }}
        >
          <h1 style={{ marginLeft: "30px" }}>제목</h1>
          <input
            style={{ marginLeft: "30px",
            padding: "20px",
            width: "80%",
            border: "1px solid #9C9C9C",
            borderRadius: "10px", }}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ marginLeft: "30px" }}>내용</h1>
          <textarea
            style={{ padding: "20px",
            marginLeft: "30px",
            width: "80%",
            height: "80vh",
            border: "1px solid #9C9C9C",
            borderRadius: "10px", }}
            type="text"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
          />
        </div>
        <div style={{ display: "flex", margin: "20px 0px 0px 30px" }}>
          {is_edit ? (
            <button className="editBttn" onClick={editPost} text="수정하기">
              수정하기
            </button>
          ) : (
            <button className="saveBttn" onClick={addPost} text="저장하기">
              저장하기
            </button>
          )}
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
