import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import post, { actionCreators as postActions } from "../redux/modules/post";
import Recent from "./Recent";
import Post from "../components/Post";
import PostDetail from "../pages/PostDetail";

import { history } from "../redux/configureStore";

//bootstrap
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid } from "../elements";

const PostList = (props) => {
  const dispatch = useDispatch();
  // const [ filterCategory, setFilterCategory] = React.useState("");

  React.useEffect(async () => {
    console.log("PostList 화면에서 useEffect로 불렀어요!");
    dispatch(postActions.loadPostM());
  }, []);

  // state는 리덕스 스토어가 가진 전체 데이터. 그 중, post store 안에 들어있는 list
  const post_lists = useSelector((state) => state.post.list);
  console.log(post_lists, "post store 안의 post_list를 불러왔어요", typeof post_lists);


  const actionA = (e) => {
    const setFilterCategory=e.target.value
      console.log(setFilterCategory)
      dispatch(postActions.categoryM(setFilterCategory))
  }


  return (
    <Container>{
      }
      <div style={{width:"1200px"}}>
      <Grid is_flex width="1000px" justify_content="center" margin="auto">
        {post_lists && post_lists.slice(0,3).map((post, i) => {
          console.log(post_lists)
                return (
                  <Grid key={i} _onClick={()=>{history.push(`/post/${post.id}`)}} >
                    <Recent post_lists={post}/>
                  </Grid>
                )
              })}
        </Grid>
        </div>
      <Container className="d_flex justify-content-between">
      <p>관심있는 스터디를 선택하세요</p>
      <Button variant="outline-secondary" value={null} onClick={actionA} style={{borderRadius:"50%", color:"#219F94"}}>전체보기</Button>
        <Button variant="outline-secondary" value={"Java"} onClick={actionA} style={{borderRadius:"50%", color:"#219F94"}}>Java</Button>
        <Button variant="outline-secondary" value={"React"} onClick={actionA}  style={{borderRadius:"50%", color:"#219F94"}}>React</Button>
        <Button variant="outline-secondary" value={"Python"} onClick={actionA}  style={{borderRadius:"50%", color:"#219F94"}}>Python</Button>
      </Container>
        <p>❗️모집 중인 스터디</p>

      {/* 정상작동 */}
        {post_lists && post_lists.map((post) => {
          // console.log(post.id,"POST입니다")
          return (
            <Grid key={post.id} _onClick={()=>{history.push(`/post/${post.id}`)}}>
              <Post post_lists={post} />
            </Grid>
          )
        })}

    </Container>
  );

};

export default PostList;
