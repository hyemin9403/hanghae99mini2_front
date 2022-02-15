import React, {useState, useEffect} from "react";
import "../shared/App.css"
import {useDispatch, useSelector} from "react-redux"
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";



import {actionCreators as postActions} from "../redux/modules/post";



const PostDetail = (props) => {
  console.log(props)
  const dispatch = useDispatch();

  const history = useHistory();

  
  const post_list = useSelector((state) => state.post.list)
  
  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;

  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;

  const [category, setCategory] = React.useState(_post ? _post.category : "")
  const [name, setName] = React.useState(_post? _post.name : "")
  const [content, setContent] = React.useState(_post? _post.content : "")
  const [memberNum, setMemberNum] =React.useState(_post? _post.memberNum : "")

  console.log(post_id)
  // const category = props.category;
  const name = useSelector((state) => state.post.name)
  console.log(name)
  // const content = props.content
  // const memberNum = props.memberNum

  


  const deletePost = () => {
    dispatch(postActions.deletePostM(`${post_id}`));
  }

  return (
    <Container style={{ width: "550px" }}>
      <div className="detailTop">

        {/* 모집현황 */}
        <div className="recruitIng">
          모집중
        </div>
        <div className="recruitComplete">
          모집완료
        </div>
        <div style={{ marginLeft: "30px", fontSize: "20px" }}>2 / 5 명</div>
      </div>


      <div className="commonDetail">
        <h2>Java</h2>
        <h1>Java 같이 공부해요</h1>
      </div>

      <div className="detailMiddle">
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "30px"}}>
          <p style={{fontWeight: "bold", marginBottom: "0px"}}>nikemania1987</p>
          <p>2022년 02월 12일 22시 10분</p>
        </div>

        {/* PostDetail Button */}
        <div style={{display: "flex",marginLeft: "auto" }}>
        <button onClick={()=> {history.push(`/write/${post_id}`)}}>수정하기</button>
        <button onClick={deletePost}>삭제하기</button>
        <button>참여하기</button>
        </div>
        
      </div>
      <hr style={{ margin: "0px 0px 50px 30px" }} />
      <div className="contentDetail">
        같이 공부해요
      </div>
    </Container>
  );
};

export default PostDetail;
