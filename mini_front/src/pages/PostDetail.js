import React from "react";
import "../shared/App.css";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { history } from "../redux/configureStore";

import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as userActions } from "../redux/modules/user"; //임시 추가 
const PostDetail = (props) => {
  const dispatch = useDispatch();

  React.useEffect(async () => {
    dispatch(userActions.userinfoM());
  }, []);

  const userinfo = useSelector((state) => state.user);
  console.log(
    "userinfo를 불러왔어요",
    userinfo,
    userinfo.user.userId,
    typeof userinfo.user.userId
  );

  const post_list = useSelector((state) => state.post.list);
  console.log(
    "post_list를 불러왔어요",
    post_list,
    typeof post_find.registeredUserId
  );

  const is_login = userinfo.is_login;

  const post_id = props.match.params.id;
  const post_find = post_list.find((p) => p.id == post_id);

  const post_idx = +post_list.findIndex((p) => p.id.toString() === post_id);
  const post = post_list[post_idx];

  const deletePost = () => {
    dispatch(postActions.deletePostM(post_id));
  };

  const joinPost = () => {
    dispatch(postActions.joinPostM(post_id));

    // 참여한 인원 수 업데이트 해서 새로 정보 불러와야함
    // ->1. how? useEffect로 새로고침 해서 아예 정보를 새로 받아온다
    // 2. state만 수정처럼 바꿔 끼운다(더 좋은 방법)
  };


  return (
    <>
      {post_find && (
        <div>
          <Container style={{ width: "550px" }}>
            <div className="detailTop">
              {/* 모집현황 */}
              <div className="recruitIng">{post_find.recruitState}</div>
              <div className="recruitComplete">{post_find.recruitState}</div>
              <div style={{ marginLeft: "30px", fontSize: "20px" }}>
                {post_find.currentMemberNum} / {post_find.memberNum} 명
              </div>
            </div>

            <div className="commonDetail">
              <h2>{post_find.category}</h2>
              <h1>{post_find.name}</h1>
            </div>

            <div className="detailMiddle">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "30px",
                }}
              >
                <p style={{ fontWeight: "bold", marginBottom: "0px" }}>
                  nikemania1987
                </p>
                <p>{post_find.createdAt}</p>
              </div>

              {/* PostDetail Button */}
              
{/* 작성자면 수정/완료 버튼 보이기

비작성자면 참가하기 버튼 보이기 - 1. 참가한 사람 / 2. 참가하지 않은 사람


작성글의 userid === 로그인한 사람의 userid -> 수정/완료를 보여주고
다르면 -> 참가하기를 보여주고
참가하기에서 -> 참가한 사람리스트 에서 참가한 사람 id 를 비교해서 같으면 참가하기 버튼이 초록색
아니면 회색 */}

              {/* 우리의 조건:
              1) 만든 사람일 경우: 수정하기 삭제하기 (참여하기 - 완료상태)
                if(userinfo.user.userId === post_find.registeredUserId) {
                  return(
                    <>
                    수정하기
                    삭제하기
                    </>
                  )

                  userinfo.user.userId == post_find.registeredUserId && (
                    <button onClick={(editPost) => {history.push(`/write/${post_id}`);}}>수정하기</button>
                <button onClick={deletePost}>삭제하기</button>  
                  ) 
                }
              2) 만든 사람이 아닌데 참여 안했을 경우: 참여하기
              if(로그인한사람의 userId === 참여한사람의 리스트 userId){
                  <button onClick={joinPost}>참여하기</button> <- 초록색
               } 
                  <button onClick={joinPost}>탈퇴하기</button> <- 회색 */}
              <div style={{ display: "flex", marginLeft: "auto" }}>
                
               
                  
                <button onClick={(editPost) => {history.push(`/write/${post_id}`);}}>수정하기</button>
                <button onClick={deletePost}>삭제하기</button>  
                <button onClick={joinPost}>참여하기</button>
                
                
                
              </div>
              
            </div>
            <hr style={{ margin: "0px 0px 50px 30px" }} />
            <div className="contentDetail">{post_find.content}</div>
          </Container>
        </div>
      )}
    </>
  );
};

export default PostDetail;
