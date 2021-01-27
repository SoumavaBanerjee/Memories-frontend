import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Skeleton from '@material-ui/lab/Skeleton';
import { Grid } from '@material-ui/core';
import makeStyles from '../styles';

const PostSkeleton = () => {
  const classes = makeStyles();
  const [id] = useState(nanoid);

  return (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {[1, 2, 3, 4].map((index) => (
        <Grid item key={id} xs={12} sm={6} md={6}>
          <div>
            <Skeleton variant="rect" width={300} height={300} />
            <Skeleton variant="text" width={200} />
            <Skeleton variant="text" width={250} />
          </div>
        </Grid>
      ))}
    </Grid>
  );
};
export default PostSkeleton;
