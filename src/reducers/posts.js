import { FETCH_ALL, CREATE } from '../ActionTypes/actionTypes';

const posts = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      console.log(posts);
      return [...posts, action.payload];

    default:
      return posts;
  }
};

export default posts;
