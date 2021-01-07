import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

function postSkeleton() {
  return (
    <React.Fragment>
      <Skeleton variant="rect" width={300} height={300} />
      <Skeleton variant="text" width={200} />
      <Skeleton variant="text" width={250} />
    </React.Fragment>
  );
}

export default postSkeleton;
