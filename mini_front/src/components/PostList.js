import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import Recent from "./Recent";
import Post from "../components/Post";
// import Clock from 'react-live-clock';
import { history } from "../redux/configureStore";

//bootstrap
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid } from "../elements";

const PostList = (props) => {
  const dispatch = useDispatch();
  // const [ filterCategory, setFilterCategory] = React.useState("");

  React.useEffect(async () => {
    dispatch(postActions.loadPostM());
  }, []);

  React.useEffect(async () => {
    dispatch(postActions.categoryM(""));
  }, []);

  // state는 리덕스 스토어가 가진 전체 데이터. 그 중, post store 안에 들어있는 list
  const post_lists = useSelector((state) => state.post.list);
  // console.log(post_lists, "post store 안의 post_list를 불러왔어요", typeof post_lists);

  const post_category = useSelector((state) => state.post.list2);
  // console.log(post_category, "post store 안의 list2 post_category를 불러왔어요", typeof post_category);


  const actionA = (e) => {
    const setFilterCategory=e.target.value
      // console.log(setFilterCategory)
      dispatch(postActions.categoryM(setFilterCategory))
  }


  return (
    <div style={{height:"100%"}}>
        <Grid width="100%" height="400px" bg="#219f94" style={{borderRadius:"100px"}}>
         {/* <Clock format={'YYYY년 MM월 DD일 HH:mm:ss'} ticking={true} timezone={''}/> */}

        <Grid is_flex height="400px" width="100%" justify_content="center" margin="auto">
          {post_lists && post_lists.slice(0,3).map((post, i) => {
            console.log(post_lists)
                  return (
                    <Grid key={i} width="380px" height="380px" _onClick={()=>{history.push(`/post/${post.id}`)}} >
                      <Recent post_lists={post}/>
                    </Grid>
                  )
                })}
          </Grid>
        </Grid>
        <Grid padding="20px">
         <p className="Gothic-900" style={{fontSize:"32px"}}>관심있는 스터디를 선택해보세요</p>
        <Button variant="outline-secondary" value={null} onClick={actionA} style={{borderRadius:"50%", width:"20px", height:"30px"}}>+</Button>
        <Button variant="outline-secondary" value={"Java"} onClick={actionA} style={{borderRadius:"50%", color:"#219F94"}}>Java</Button>
        <Button variant="outline-secondary" value={"React"} onClick={actionA}  style={{borderRadius:"50%", color:"#219F94"}}>React</Button>
        <Button variant="outline-secondary" value={"Python"} onClick={actionA}  style={{borderRadius:"50%", color:"#219F94"}}>Python</Button>
        </Grid>
      <hr></hr>
      <Grid padding="20px">
        <Grid margin="0px auto 50px auto">
          <div className="Gothic-700" style={{fontSize:"33px", color:"#a9a9a9"}}>
          ❗️모집 중인 스터디
          <Button  onClick={() => {history.push("/write");}}style={{color:"black",border:"0px solid #C1DEAE", borderRadius:"30px", backgroundColor:"#C1DEAE", float:"right", width: "120px", height: "40px" }}>
          스터디 만들기
        </Button>
        </div>
        </Grid>
      {/* 정상작동 */}
        {post_category && post_category.map((post) => {
          console.log(post.id,"POST입니다")
          return (
            <Grid key={post.id} margin="16px" padding="10px" _onClick={()=>{history.push(`/post/${post.id}`)}}>
              <Post post_category={post} />
            </Grid>
          )
        })}
        </Grid>
    </div>
  );

};

export default PostList;
