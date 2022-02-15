import React from "react";
import { Grid } from "../elements";
import Recent from "../components/Recent";
import PostList from "../components/PostList";

import { history } from "../redux/configureStore";

const main = () => {
  return (
    <>
      <Grid margin="auto" width="1000px" center="center" color="red">
        <PostList />
        <button
          onClick={() => {
            history.push("/write");
          }}
          style={{ width: "100px", height: "100px" }}
        >
          작성하기
        </button>
      </Grid>
    </>
  );
};

export default main;
