import * as api from '../api';
import { FETCH_ALL, CREATE } from '../ActionTypes/actionTypes';

// Create the actions.

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    // debug line

    const action = { type: FETCH_ALL, payload: data };
    dispatch(action);
  } catch (error) {
    /* eslint-disable no-console */
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    const action = { type: CREATE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
