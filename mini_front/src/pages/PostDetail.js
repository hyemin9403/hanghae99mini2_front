import React from "react";
import Grid from "../elements/Grid";

const PostDetail = () => {
  return (
    <Grid>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100px",
          alignItems: "center",
        }}
      >
        <div>모집완료</div>
        <div>2 / 5명</div>
      </div>
      <div style={{ display: "flex" }}>
        <h2>Java</h2>
      </div>
      <h1 style={{ display: "flex" }}>같이 자바 공부해봐요</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p style={{ fontWeight: "bold", marginRight: "20px" }}>nikemania1987</p>
        <p>2022년 02월 12일 22시 10분</p>
        <button style={{ float: "right" }}>참여하기</button>
      </div>
      <hr />
      <div>
        <p>스터디 주제 : 자바</p>
      </div>
    </Grid>
  );
};

export default PostDetail;
