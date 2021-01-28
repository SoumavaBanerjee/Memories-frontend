import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../ActionTypes/actionTypes';

const posts = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      console.log(posts);
      return [...posts, action.payload];

    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));

    case DELETE:
      return posts.filter((post) => post._id !== action.payload);

    default:
      return posts;
  }
};

export default posts;
