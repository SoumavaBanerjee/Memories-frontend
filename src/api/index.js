import axios from 'axios';

const url = 'http://localhost:5000/posts';

// eslint-disable-next-line import/prefer-default-export
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
