import React from "react";
import {Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Post = (props) => {
  // console.log(
  //   "post 화면의 props 입니다.",
  //   props, props.post_lists.category
  // );

  const p = props.post_lists

  return (
    <>
      <Card>
        <Card.Header>
          <h1> {p.category}</h1>
          <p>
            {p.createdAt} {p.name}
          </p>
        </Card.Header>
        <p>{p.content}</p>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <footer className="blockquote-footer">
              {p.recruitState}{" "}
              <cite title="Source Title">
                모집인원 {p.currentMemberNum}/{p.memberNum}
              </cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
};

// Post.defaultProps = {
//   id: "1",
//   category: "영어",
//   name: "영진",
//   content: "공부합시다",
//   recruitState: "모집중",
//   memberNum: 2,
//   currentMemberNum: 1,
//   createdAt: "2020-03-02 10:22:22",
// };
export default Post;
