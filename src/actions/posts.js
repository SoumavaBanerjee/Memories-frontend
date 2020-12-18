import { fetchPosts } from "../api";
import { FETCH_ALL, CREATE } from "../ActionTypes/actionTypes";

// Create the actions.

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await fetchPosts();
    const action = { type: FETCH_ALL, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
