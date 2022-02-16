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
      <Container style={{ width: "550px" }}>
        <div className="writeTop">
          <h1>네가스터디</h1>
          <h3>다양한 스터디를 함께 모집해봐요</h3>
        </div>
        {/* category */}
        <div className="studyCategory">
          <h1 style={{ textAlign: "left" }}>스터디 주제</h1>
          <div style={{ display: "flex" }}>
            <ButtonA
              id="1"
              value={"Java"}
              style={{ marginRight: "10px" }}
              onClick={categorySelect}
            >
              Java
            </ButtonA>
            <ButtonA
              id="2"
              value={"React"}
              style={{ marginRight: "10px" }}
              onClick={(e) => setCategory(e.target.value)}
            >
              React
            </ButtonA>
            <ButtonA
              id="3"
              value={"Python"}
              onClick={(e) => setCategory(e.target.value)}
            >
              Python
            </ButtonA>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", height: "150px" }}
        >
          <h1 style={{ marginLeft: "30px" }}>모집인원</h1>
          <input
            style={{ marginLeft: "30px", width: "20vh" }}
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
            style={{ marginLeft: "30px", width: "50vh" }}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ marginLeft: "30px" }}>내용</h1>
          <input
            style={{ marginLeft: "30px", width: "80vh", height: "80vh" }}
            type="text"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
          />
        </div>
        <div style={{ display: "flex", margin: "20px 0px 0px 30px" }}>
          {is_edit ? (
            <ButtonA onClick={editPost} text="수정하기">
              수정하기
            </ButtonA>
          ) : (
            <ButtonA onClick={addPost} text="저장하기">
              저장하기
            </ButtonA>
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
