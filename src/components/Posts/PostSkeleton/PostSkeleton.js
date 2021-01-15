import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Skeleton from '@material-ui/lab/Skeleton';
import { Grid } from '@material-ui/core';
import makeStyles from '../styles';

const PostSkeleton = () => {
  const classes = makeStyles();
  const [id] = useState(nanoid);

  return (
    <Grid key={id} className={classes.container} container alignItems="stretch" spacing={3}>
      {[1, 2, 3, 4].map((index) => (
        <Grid key={`${id}_${index}`} item xs={12} sm={6} md={6}>
          <Skeleton variant="rect" width={300} height={300} />
          <Skeleton variant="text" width={200} />
          <Skeleton variant="text" width={250} />
        </Grid>
      ))}
    </Grid>
  );
};
export default PostSkeleton;
