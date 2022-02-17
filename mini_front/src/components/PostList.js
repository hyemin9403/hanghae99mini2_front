import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import Recent from "./Recent";
import Post from "../components/Post";
// import Clock from 'react-live-clock';
import { history } from "../redux/configureStore";

//bootstrap

import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, Button } from "../elements";

const PostList = (props) => {
  const dispatch = useDispatch();
  // const [ filterCategory, setFilterCategory] = React.useState("");
  const user = useSelector((state) => state.user);

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
    const setFilterCategory = e.target.value;
    // console.log(setFilterCategory)
    dispatch(postActions.categoryM(setFilterCategory));
  };

  return (
    <>
      <Button
        fix
        _onClick={() => {
          window.scrollTo(0, 0);
        }}
      >^</Button>
      {post_category && user.is_login && (
        <Grid width="100%" height="100%">
          <Grid width="100%" height="300px" bg="#219f94">
            {/* <Clock format={'YYYY년 MM월 DD일 HH:mm:ss'} ticking={true} timezone={''}/> */}
            <Grid is_flex width="1000px" height="300px">
              {post_lists &&
                post_lists.slice(0, 3).map((post, i) => {
                  return (
                    <Grid
                      key={i}
                      width="33%"
                      height="300px"
                      margin="50px auto 0px auto"
                      _onClick={() => {
                        history.push(`/post/${post.id}`);
                      }}
                    >
                      <Recent post_lists={post} />
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
          <Grid padding="20px">
            <Grid fontWeight="900" fontSize="32px" margin="10px">
              {" "}
              관심있는 스터디를 선택해보세요
            </Grid>
            <Grid is_flex>
              <Grid width="50px" margin="0px 20x 0px 0px">
                  <Button
                    width="100%"
                    circle
                    _value={""}
                    _onClick={actionA}
                    color="black"
                    cursor="pointer"
                  >
                  ALL
                  </Button>
                <Grid textAlign="center"  fontWeight="400" width="100%">
                  전체
                </Grid>
              </Grid>

              <Grid width="50px" padding="0px 0px 0px 10px" margin="0px 20x 0px 0px">
                <Button
                  width="100%"
                  circle
                  _value={"Java"}
                  _onClick={actionA}
                  color="red"
                  cursor="pointer"
                >J</Button>
                <Grid width="100%" fontWeight="400">Java</Grid>
              </Grid>

              <Grid width="50px" padding="0px 0px 0px 20px" margin="0px 20x 0px 0px">
                <Button
                  width="100%"
                  circle
                  _value={"React"}
                  _onClick={actionA}
                  color="skyblue"
                  cursor="pointer"
                >R</Button>
                <Grid width="100%" fontWeight="400">React</Grid>
              </Grid>

              <Grid width="50px" padding="0px 0px 0px 30px" margin="0px 20x 0px 0px">
                <Button
                  width="100%"
                  circle
                  _value={"Python"}
                  _onClick={actionA}
                  color="blue"
                  cursor="pointer"
                >P</Button>
                <Grid width="100%" fontWeight="400">Python</Grid>
              </Grid>
            </Grid>
          </Grid>
          <hr></hr>
          <Grid padding="20px">
            <Grid margin="0px auto 50px auto">
              <Grid
                margin="10px"
                fontWeight="700"
                fontSize="33px"
                color="#a9a9a9"
              >
                ❗️모집 중인 스터디
                <Button
                  study
                  bg="#C1DEAE"
                  _onClick={() => {
                    history.push("/write");
                  }}
                >
                  스터디 만들기
                </Button>
              </Grid>
            </Grid>
            {/* 정상작동 */}
            {post_category &&
              post_category.map((post) => {
                return (
                  <Grid
                    key={post.id}
                    margin="16px"
                    padding="10px"
                    cursor="pointer"
                    _onClick={() => {
                      history.push(`/post/${post.id}`);
                    }}
                  >
                    <Post post_category={post} />
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      )}
      {post_category && !user.is_login && (
        <Grid width="100%" height="100%">
          <Grid width="100%" height="300px" bg="#219f94">
            {/* <Clock format={'YYYY년 MM월 DD일 HH:mm:ss'} ticking={true} timezone={''}/> */}
            <Grid is_flex width="1000px" height="300px">
              {post_lists &&
                post_lists.slice(0, 3).map((post, i) => {
                  return (
                    <Grid
                      key={i}
                      width="33%"
                      height="300px"
                      margin="50px auto 0px auto"
                      _onClick={() => {
                        window.alert("로그인이 필요한 서비스 입니다");
                        history.push("/login");
                      }}
                    >
                      <Recent post_lists={post} />
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
          <Grid padding="20px">
            <Grid fontWeight="900" fontSize="32px" margin="10px">
              {" "}
              관심있는 스터디를 선택해보세요
            </Grid>
            <Grid is_flex>
              <Grid width="50px" margin="0px 20x 0px 0px">
                <Button
                  width="100%"
                  circle
                  _value={""}
                  _onClick={actionA}
                  cursor="pointer"
                  color="black"
                >ALL</Button>
                <Grid textAlign="center" fontWeight="400" width="100%">
                  전체
                </Grid>
              </Grid>

              <Grid width="50px" padding="0px 0px 0px 10px" margin="0px 20x 0px 0px">
                <Button
                  width="100%"
                  circle
                  _value={"Java"}
                  _onClick={actionA}
                  cursor="pointer"
                  color="red"
                >J</Button>
                <Grid width="100%" fontWeight="400">Java</Grid>
              </Grid>

              <Grid width="50px" padding="0px 0px 0px 20px" margin="0px 20x 0px 0px">
                <Button
                  width="100%"
                  circle
                  _value={"React"}
                  _onClick={actionA}
                  cursor="pointer"
                  color="skyblue"
                >R</Button>
                <Grid width="100%" fontWeight="400">React</Grid>
              </Grid>

              <Grid width="50px" padding="0px 0px 0px 30px" margin="0px 20x 0px 0px">
                <Button
                  width="100%"
                  circle
                  _value={"Python"}
                  _onClick={actionA}
                  cursor="pointer"
                  color="blue"
                >P</Button>
                <Grid width="100%" fontWeight="400">Python</Grid>
              </Grid>
            </Grid>
          </Grid>
          <hr></hr>
          <Grid padding="20px">
            <Grid margin="0px auto 50px auto">
              <Grid
                margin="10px"
                fontWeight="700"
                fontSize="33px"
                color="#a9a9a9"
              >
                ❗️모집 중인 스터디
                <Button
                  study
                  bg="#C1DEAE"
                  _onClick={() => {
                    window.alert("로그인이 필요한 서비스 입니다");
                    history.push("/login");
                  }}
                >
                  스터디 만들기
                </Button>
              </Grid>
            </Grid>
            {/* 정상작동 */}
            {post_category &&
              post_category.map((post) => {
                return (
                  <Grid
                    key={post.id}
                    margin="16px"
                    padding="10px"
                    cursor="pointer"
                    _onClick={() => {
                      window.alert("로그인이 필요한 서비스 입니다");
                      history.push("/login");
                    }}
                  >
                    <Post post_category={post} />
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default PostList;
