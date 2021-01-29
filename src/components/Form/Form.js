/* eslint-disable  no-unused-vars */
import { TextField, Paper, Button, Typography } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import TitleIcon from '@material-ui/icons/Title';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import NoteIcon from '@material-ui/icons/Note';
import InputAdornment from '@material-ui/core/InputAdornment';
import FileInput from 'react-file-base64';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

import makeStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const classes = makeStyles();
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null,
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }

    clear();
  };

  const clear = (currentId) => {
    setCurrentId(null);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  return (
    <Paper elevation={3} className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5" className={classes.formHead}>
          {currentId ? 'Edit' : 'Create'} your Memory
        </Typography>
        <TextField
          className={classes.textFiledSpacing}
          name="creator"
          label="Creator"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountBoxIcon fontSize="small" className={classes.icons} />
              </InputAdornment>
            ),
          }}
          value={postData.creator}
          onChange={(e) => {
            setPostData({ ...postData, creator: e.target.value });
          }}
        />

        <TextField
          className={classes.textFiledSpacing}
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TitleIcon fontSize="small" className={classes.icons} />
              </InputAdornment>
            ),
          }}
          value={postData.title}
          onChange={(e) => {
            setPostData({ ...postData, title: e.target.value });
          }}
        />

        <TextField
          className={classes.textFiledSpacing}
          name="message"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <NoteIcon fontSize="small" className={classes.icons} />
              </InputAdornment>
            ),
          }}
          value={postData.message}
          onChange={(e) => {
            setPostData({ ...postData, message: e.target.value });
          }}
        />

        <TextField
          className={classes.textFiledSpacing}
          name="tags"
          label="Tags"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalOfferIcon fontSize="small" className={classes.icons} />
              </InputAdornment>
            ),
          }}
          value={postData.tags}
          onChange={(e) => {
            setPostData({ ...postData, tags: e.target.value.split(',') });
          }}
        />
        <div className={classes.fileInput}>
          <FileInput
            /* eslint-disable react/jsx-boolean-value */
            className={classes.fileInput}
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              setPostData({ ...postData, selectedFile: base64 });
            }}
          />
        </div>
        <Button
          className={classes.formButton}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          Save
        </Button>
        <Button
          className={classes.formButton}
          variant="contained"
          color="secondary"
          onClick={clear}
          fullWidth
        >
          Reset all
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
