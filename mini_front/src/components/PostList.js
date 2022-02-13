import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import Post from "../components/Post";
//bootstrap
import { Button, Breadcrumb, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PostList = () => {
  const dispatch = useDispatch();

  React.useEffect(async () => {
    console.log("PostList 화면에서 useEffect로 불렀어요!");
    dispatch(postActions.loadPostM());
  }, []);

  // state는 리덕스 스토어가 가진 전체 데이터. 그 중, post store 안에 들어있는 list
  const post_lists = useSelector((state) => state.post.list);
  console.log(post_lists, "post store 안의 post_list를 불러왔어요", typeof post_lists);

  return (
    <Container>
      <p>관심있는 스터디를 선택하세요</p>
      <Container className="d_flex justify-content-between">
        <Button variant="outline-secondary" style={{borderRadius:"50%", color:"#219F94"}}>J</Button>
        <Button>고리</Button>
        <Button>가능?</Button>
      </Container>
        <p>❗️모집 중인 스터디</p>

{/* 정상작동 */}
        {post_lists && post_lists.map((post) => {
          return (
            <div key={post.id}>
              <Post post_lists={post}/>
            </div>
          )
        })}
    </Container>
  );
};

export default PostList;
