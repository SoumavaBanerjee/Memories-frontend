import React from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import Post from './Post/Post';
import makeStyles from './styles';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = makeStyles();

  // console.log(posts);

  return !posts.length ? (
    <div>
      <Skeleton variant="rect" width={200} height={200} />
      <Skeleton variant="text" width={100} />
      <Skeleton variant="text" width={150} />
    </div>
  ) : (
    <Grid container>
      <Post />
      <Post />
      <Post />
    </Grid>
  );
};

export default Posts;
