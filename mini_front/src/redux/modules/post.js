
import { createAction, handleActions } from "redux-actions";
import moment from "moment";
import axios from "axios";

const LOAD_POST = "LOAD_POST";

const loadPost = createAction(LOAD_POST, (post_list) => ({post_list}))

const initialPost = {
      id: "",
      category: "",
      name: "",
      content: "",
      recruitState: "",
      memberNum: 1,
      currentMemberNum: 0,
      createdAt: "YYYY-MM-DD HH:mm:ss",
};

// initial state
const initialState = {
    list: [],
    is_loading: false,
  };

  const loadPostM = () => async (dispatch, getState) => {
    console.log("loadPostFB 미들웨어에서 데이터를 받아옵니다.");

    axios
    .get("http://localhost:3003/boards")
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

const getBtn = () => async (dispatch, getState) => {
    console.log("axios get 요청을 위한 getBtn 미들웨어에서 받았습니다");

    axios
    .get("http://localhost:3003/boards")
    .then((res) => {
      console.log(res.data);
      console.log(res.data[0].name)
    })
    .catch((err) => {
      console.log(err);
    });

}

export default handleActions(
    {
    [LOAD_POST]: (state = initialState, action = {}) => {
        console.log(
          action.payload.post_list,
          "가 loadPost 리듀서로 도착했습니다"
        );
  
        return { ...state, list: action.payload.post_list };
    }
},initialPost);


const actionCreators = {getBtn, loadPostM}

export {actionCreators};