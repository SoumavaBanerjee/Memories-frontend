import axios from 'axios';

const url = 'http://localhost:5000/posts';

// eslint-disable-next-line import/prefer-default-export
export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) =>
  axios.post(url, newPost, { headers: { 'Access-Control-Allow-Origin': '*' } });

export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost, { headers: { 'Access-Control-Allow-Origin': '*' } });

export const deletePost = (id) =>
  axios.delete(`${url}/${id}`, { headers: { 'Access-Control-Allow-Origin': '*' } });

export const likePost = (id) =>
  axios.patch(`${url}/${id}/likedPost`, { headers: { 'Access-Control-Allow-Origin': '*' } });
