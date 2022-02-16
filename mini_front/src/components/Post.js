import React from "react";
import {Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid } from "../elements";

const Post = (props) => {

  const p = props.post_category

  return (
    <>
      <Card style={{borderRadius:"15px", boxShadow:"0px 0px 5px 5px #a9a9a9"}}>
        <Grid padding="20px">
          <div className="Gothic-900" style={{fontSize:"30px", padding:"0px 30px 0px 0px "}}>
          {p.category}
          <span className="Gothic-400" style={{color:"#219f94", fontSize:"16px", float:"right", paddingTop:"35px"}}>{p.name}</span>
          </div>
          <hr style={{margin:"4px"}}></hr>
          <div className="Gothic-200" style={{fontSize:"12px", marginBottom:"10px"}}>
            {p.createdAt}
          </div>
        <div className="Gothic-900" style={{fontSize:"35px"}}>{p.content}</div>
        </Grid>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <Grid is_flex>
              <div style={{ width:"150px",marginRight:"20px", borderRadius:"15px", textAlign:"center",backgroundColor:"#219f94"}}>
              {p.recruitState}{" "}
              </div>
              <div className="Gothic-600">
              모집인원 : {p.memberNum}명
              {/* {p.currentMemberNum} */}
              </div>
            </Grid>
            
              <cite title="Source Title">
                
              </cite>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
};

export default Post;
