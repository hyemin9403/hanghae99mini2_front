import React, { useEffect } from "react";
import "../shared/App.css";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { history } from "../redux/configureStore";

import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as userActions } from "../redux/modules/user";

const PostDetail = (props) => {
  const dispatch = useDispatch();

  const post_list = useSelector((state) => state.post.list);
  console.log("post_list", post_list);

  const user_info = useSelector((state) => state.user.user);
  console.log("user_info", user_info);

  const post_id = props.match.params.id;

  const post_find = post_list.find((p) => p.id == post_id);
  console.log("post_find", post_find);

  //참가한 거 찾기
  let _temp_list = [];
  const joined_list = user_info?.registerStudyList?.map((list) => {
    _temp_list.push(list.id);
  });
  console.log("참여한 스터디의 id들 _temp_list", _temp_list);

  let include_check = false;

  // 내가 참가한 리스트 중에 지금 접속한 스터디가 있는지
  if (_temp_list.includes(post_find.id)) {
    include_check = true;
    console.log("참가한 스터디 입니다.");
    console.log(_temp_list, post_find.id);
  } else {
    include_check = false;
    console.log("참가하지 않은 스터디 입니다.");
    console.log(_temp_list, post_find.id);
  }

  const deletePost = () => {
    dispatch(postActions.deletePostM(post_id));
  };

  const joinPost = () => {
    dispatch(postActions.joinPostM(post_id));
  };

  return (
    <>
      {post_find && (
        <div>
          <Container style={{ width: "950px" }}>
            <div className="detailTop">
              {/* 모집현황 */}
              {post_find.currentMemberNum % post_find.recruitState != 0 ? (
                <div className="recruitIng">{post_find.recruitState}</div>
              ) : (
                <div className="recruitComplete">{post_find.recruitState}</div>
              )}
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

              {user_info.userId === post_find.registeredUserId ? (
                <div style={{ display: "flex", marginLeft: "auto" }}>
                  <button
                  className="editTeam"
                    onClick={() => {
                      history.push(`/write/${post_id}`);
                    }}
                  >
                    수정하기
                  </button>
                  <button className="deleteTeam" onClick={deletePost}>삭제하기</button>
                </div>
              ) : include_check ? (
                <div style={{ display: "flex", marginLeft: "auto" }}>
                  <button className="leaveTeam" onClick={joinPost}>탈퇴하기</button>
                </div>
              ) : (
                <div style={{ display: "flex", marginLeft: "auto" }}>
                  <button className="joinTeam" onClick={joinPost}>참여하기</button>
                </div>
              )}
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
