import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import Post from './Post/Post';
import PostSkeleton from './PostSkeleton/PostSkeleton';
import makeStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = makeStyles();

  return !posts.length ? (
    <PostSkeleton />
  ) : (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post setCurrentId={setCurrentId} post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
