import React from "react";
import {Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid } from "../elements";

const Post = (props) => {

  const p = props.post_category

  return (
    <>
      <Grid width="1000px"
      border="2px solid #a9a9a9"
      borderRadius="15px"
      boxShadow="0px 0px 5px 5px #a9a9a9">
        <Grid padding="20px">
          <Grid is_flex width="1000px">
            <Grid
            width="52%"
            fontWeight="900"
            fontSize="30px"
            padding="0px 30px 0px 0px "
            >
            {p.category}
            </Grid>
          <Grid
          width="40%"
          textAlign="right"
          fontWeight="400"
          color="#219f94"
          fontSize="16px"
          padding="20px 20px 0px 0px"
          >
            {p.name}
          </Grid>
          </Grid>
          <hr style={{margin:"4px"}}></hr>
          <div className="Gothic-200" style={{fontSize:"12px", marginBottom:"10px"}}>
            {p.createdAt} 
          </div>
        <div className="Gothic-900" style={{fontSize:"35px"}}>{p.content}</div>
        </Grid>
        <Card.Body>
            <Grid is_flex>
              <div style={{ width:"150px",marginRight:"20px", borderRadius:"15px", textAlign:"center",backgroundColor:"#219f94"}}>
              {p.recruitState}{" "}
              </div>
              <div className="Gothic-600">
              모집인원 : {p.currentMemberNum}/{p.memberNum}명
              
              </div>
            </Grid>
        </Card.Body>
      </Grid>
    </>
  );
};

export default Post;
