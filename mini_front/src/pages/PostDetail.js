import React, {useState, useEffect} from "react";
import "../shared/App.css"
import {useDispatch, useSelector} from "react-redux"
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { history } from "../redux/configureStore";

// import dummy from "../../db.json"
import {actionCreators as postActions} from "../redux/modules/post";

const PostDetail = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list)

  const post_id = props.match.params.id;
  const post_find = post_list.find((p) => p.id == post_id);

  // useEffect(() => {
  //   if(post_find) {
  //     return;
  //   }
  //   // dispatch(postActions.loadOnePostFB(id));
  // })

  const is_edit = post_id ? true : false;
  console.log("post_list와 post_id", post_list, post_id, post_find )

  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;



  const [category, setCategory] = React.useState(_post ? _post.category : "")
  const [name, setName] = React.useState(_post? _post.name : "")
  const [content, setContent] = React.useState(_post? _post.content : "")
  const [memberNum, setMemberNum] =React.useState(_post? _post.memberNum : "")

  // const category = props.category;
  // const name = useSelector((state) => state.post.name)
  // const content = props.content
  // const memberNum = props.memberNum

  


  const deletePost = () => {
    dispatch(postActions.deletePostM(`${post_id}`));
  }

  const editPost = () => {
    dispatch(postActions.editPostM(post_id, {category: category, name: name, content: content, memberNum: memberNum}))
  }


  // const id = 1
  // const dataList = dummy.write.filter(writes => (
  //   writes.id === id
  // ))
  return (
    <>
    {post_find && (
      <div>
        <Container style={{ width: "550px" }}>
      <div className="detailTop">

        {/* 모집현황 */}
        <div className="recruitIng">
          {post_find.recruitState}
        </div>
        <div className="recruitComplete">
        {post_find.recruitState}
        </div>
        <div style={{ marginLeft: "30px", fontSize: "20px" }}>{post_find.currentMemberNum} / {post_find.memberNum} 명</div>
      </div>


      <div className="commonDetail">
        <h2>{post_find.category}</h2>
        <h1>{post_find.name}</h1>
      </div>

      <div className="detailMiddle">
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "30px"}}>
          <p style={{fontWeight: "bold", marginBottom: "0px"}}>nikemania1987</p>
          <p>{post_find.createdAt}</p>
        </div>

        {/* PostDetail Button */}
        <div style={{display: "flex",marginLeft: "auto" }}>
        <button onClick={(editPost)=> {history.push(`/write/${post_id}`)}}>수정하기</button>
        <button onClick={deletePost}>삭제하기</button>
        <button>참여하기</button>
        </div>
        
      </div>
      <hr style={{ margin: "0px 0px 50px 30px" }} />
      <div className="contentDetail">
        {post_find.content}
      </div>
    </Container>
      </div>
    )}
    </>

    // 
    
    //
  );
};

export default PostDetail;
