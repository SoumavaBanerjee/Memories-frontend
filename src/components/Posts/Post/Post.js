import React from 'react';
import makeStyles from './styles';

import { Card, CardActions, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import EditIcon from '@material-ui/icons/Edit';

import formatDistance from 'date-fns/formatDistance';

import moment from 'moment';

const Post = ({ post }) => {
  // eslint-disable-next-line no-unused-vars
  const classes = makeStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {formatDistance(post.createdAt, new Date(), { addSuffix: true })}
        </Typography>
      </div>
    </Card>
  );
};

export default Post;
