
import { createAction, handleActions } from "redux-actions";
import moment from "moment";
import axios from "axios";
import instance from "../../shared/request";


// action type
const LOAD_POST = "LOAD_POST";
const ADD_POST = "ADD_POST"
const EDIT_POST = "EDIT_POST"
const DELETE_POST = "DELETE_POST"
const CATEGORY_POST = "CATEGORY_POST"

// action creators
const loadPost = createAction(LOAD_POST, (post_list) => ({post_list}))
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}))
const deletePost = createAction(DELETE_POST, (post_id) => ({post_id}));
const categoryPost = createAction(CATEGORY_POST, (post_list) => ({post_list}));

// initial state
const initialState = {
    list: [],
    is_loading: false,
  };

  const loadPostM = () => async (dispatch, getState) => {
    console.log("loadPostFB 미들웨어에서 데이터를 받아옵니다.");

    instance
    // .get("http://localhost:3003/boards")
    .get("http://3.38.178.109/boards")
    .then((res) => {
      // console.log(res.data);  
      
      const post_data = res.data;

      let post_list = [];

      // post_data에서 하나씩 꼭 돌려줘야함.
      post_data.forEach((doc) => {
        post_list.push({ id: doc.id, ...doc });
      });
      dispatch(loadPost(post_list));
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const categoryM = (category) => async(dispatch, getState) => {
    console.log(category);

    axios
    // .get(`http://localhost:3003/boards/${category}`
    .get(`http://3.38.178.109/boards/${category}`)
    .then((res) => {
      const post_data = res.data;
      console.log("데이터가져오기성공")
      console.log(res)
      let post_list = [];

      // post_data에서 하나씩 꼭 돌려줘야함.
      post_data.forEach((doc) => {
        post_list.push({ id: doc.id, ...doc });
      });
      dispatch(categoryPost(post_list));
    })
    .catch((err) => {
      console.log(category)
      console.log(err);
    });
  };

  const editPostM = (post_id, post) => async(dispatch, getState) => {
    console.log("editpost 요청이 잘 왔습니다.")
    console.log(post_id)

    // const _post_idx = getState().write.list.findIndex((p) => p.id === write_id);
    // const _post = getState().post.list[_post_idx];

    // console.log(_post_idx)

    // axios.put(`http://localhost:3003/write/${_post}` , {
    //   name: "Hello",
    //   category: "haha",
    //   content: "contents.content",
    //   memberNum: 3,
    // })
    // .then((res) => {
    //   console.log("edit 성공했다.")
    // })
    // .catch((err) => {
    //   console.log(err);
    // })

}


 const addPostM = (contents) => async (dispatch, getState) => {
    console.log("axios post 요청을 위한 postPostDB에서 받았습니다");
    console.log("contents", contents);

    const user = getState().user
    // const uid = user.user.uid
    const _username = localStorage.getItem("username");

    console.log("state", user, user.user.uid, "로컬스토리지",_username)
  
    instance
      .post(`http://3.38.178.109/board/write/${user.user.uid}`, {
        category: contents.category,
        name: contents.name,
        content: contents.content,
        memberNum: contents.memberNum,
        })
      .then((res) => {
        console.log("제대로 들어갔다.");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const addPostM = (contents) => async (dispatch, getState) => {
  //   console.log("axios post 요청을 위한 postPostDB에서 받았습니다");
  //   console.log("contents", contents);
  
  //   instance
  //     .post("http://3.38.178.109/board/write", {
  //       category: contents.category,
  //       name: contents.name,
  //       content: contents.content,
  //       memberNum: contents.memberNum,
  //     })
  //     .then((res) => {
  //       console.log("제대로 들어갔다.");
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const deletePostM = (post_id) => async (dispatch, getState,{history}) =>{
    console.log("axios delete 요청을 받았습니다.",post_id)

    axios
    .delete(`http://3.38.178.109/board/${post_id}/delete`)
    .then((res) =>{
      dispatch(deletePost(post_id));
      console.log("삭제되었음")
    })
    .catch((err)=>{
      window.alert("삭제가 되지 않았어요!");
      console.log(err)
    });
  }

  export default handleActions({
    [LOAD_POST]: (state = initialState, action = {}) => {
      console.log(action.payload.post_list, "가 loadPost 리듀서로 도착했습니다");
  
      return { ...state, list: action.payload.post_list };
    },
    [ADD_POST]: (state, action) => {
      console.log(state, action, "가 addpost 리듀서로 도착했습니다.");
      const new_post_list = [...state.list, action.payload.post];
  
      return { ...state, list: new_post_list };
    },

    [DELETE_POST]: (state, action) => {
      console.log(state, action.payload, "가 deletepost 리듀서로 도착했습니다.")
      
      const new_post_list = state.list.filter((post) => {
        return action.payload.post_id !== post.id;
      });
      return { ...state, list: new_post_list };
    },
    [CATEGORY_POST] : (state = initialState, action = {}) => {
      console.log(action.payload.post_list, "가 categoryPost 리듀서로 도착했습니다");
  
      return { ...state, list: action.payload.post_list };
    },


    [EDIT_POST]: (state, action) => {
      console.log(state,action, "가 editpost 리듀서로 도착했습니다." )
    }
    
  }, initialState);


const actionCreators = {loadPostM, addPostM, deletePostM, editPostM, categoryM}

export {actionCreators};