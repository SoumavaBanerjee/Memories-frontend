import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import Post from './Post/Post';
import PostSkeleton from './PostSkeleton/postSkeleton';
import makeStyles from './styles';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = makeStyles();

  // console.log(posts);

  return !posts.length ? (
    <Grid
      className={classes.mainContainer}
      container
      justify="center"
      alignItems="stretch"
      spacing={3}
    >
      <Grid item sm={12} md={6}>
        <PostSkeleton />
      </Grid>
      <Grid item sm={12} md={6}>
        <PostSkeleton />
      </Grid>
      <Grid item sm={12} md={6}>
        <PostSkeleton />
      </Grid>
      <Grid item sm={12} md={6}>
        <PostSkeleton />
      </Grid>
    </Grid>
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      justify="center"
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item sm={12} md={6}>
          <Post post={post}></Post>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
