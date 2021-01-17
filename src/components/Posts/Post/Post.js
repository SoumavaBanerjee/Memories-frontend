import React from 'react';
import makeStyles from './styles';

import { Card, CardActions, CardMedia, CardContent, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import moment from 'moment';

const Post = ({ post, setCurrentId }) => {
  const classes = makeStyles();

  const handleClickEdit = (event) => {
    event.preventDefault();
    setCurrentId(post._id);
  };

  const handleClickDelete = (event) => {
    event.preventDefault();
    console.log('Clicking the Delete button');
  };

  const handleClickLike = (event) => {
    event.preventDefault();
    console.log('Clicking the Like button');
  };

  return (
    <Card className={`${classes.card} ${classes.fullHeightCard}`}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          size="small"
          style={{ color: 'white' }}
          onClick={handleClickEdit}
          startIcon={<EditIcon fontSize="default" color="inherit" />}
        ></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small">
          <ThumbUpAltIcon
            className={classes.iconMargin}
            fontSize="default"
            color="primary"
            onClick={handleClickLike}
          />
          {`Like ${post.likeCount}`}
        </Button>
        <Button size="small">
          <DeleteIcon
            className={classes.iconMargin}
            fontSize="default"
            color="primary"
            onClick={handleClickDelete}
          />
          {`Delete`}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;

//
