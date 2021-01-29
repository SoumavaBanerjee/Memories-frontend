import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

import makeStyles from './styles';

import { Card, CardActions, CardMedia, CardContent, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import moment from 'moment';

const Post = ({ post, setCurrentId }) => {
  const classes = makeStyles();
  const dispatch = useDispatch();

  const handleClickEdit = (event) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setCurrentId(post._id);
  };

  const handleClickDelete = (event) => {
    dispatch(deletePost(post._id));
  };

  const handleClickLike = (event) => {
    dispatch(likePost(post._id));
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
          {post.tags.map((tag) => {
            let hashTag = tag.trim();
            if (hashTag.includes(' ')) return `#${hashTag.replaceAll(' ', '_')} `;
            return `#${hashTag} `;
          })}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" onClick={handleClickLike}>
          <ThumbUpAltIcon className={classes.iconMargin} fontSize="default" color="primary" />
          {` Like ${post.likeCount}`}
        </Button>
        <Button size="small" onClick={handleClickDelete}>
          <DeleteIcon className={classes.iconMargin} fontSize="default" color="primary" />
          {` Delete `}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;

//
