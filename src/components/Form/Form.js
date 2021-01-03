/* eslint-disable  no-unused-vars */
import { TextField, Paper, Button, Typography } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import TitleIcon from '@material-ui/icons/Title';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ImageIcon from '@material-ui/icons/Image';
import NoteIcon from '@material-ui/icons/Note';
import SaveIcon from '@material-ui/icons/Save';
import InputAdornment from '@material-ui/core/InputAdornment';

import FileInput from 'react-file-base64';

import React, { useState } from 'react';
import makeStyles from './styles';

const Form = () => {
  const classes = makeStyles();

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    Selectedfile: '',
  });

  /* eslint-disable no-console */
  console.log(postData);

  const handleSubmit = () => {};
  return (
    <Paper elevation={3} className={classes.paper}>
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit()}>
        <Typography variant="h5" className={classes.formHead}>
          Create Your Memory!
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
            setPostData({ ...postData, tags: e.target.value });
          }}
        />

        <TextField
          className={classes.textFiledSpacing}
          name="selectedFile"
          label="Image"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ImageIcon fontSize="small" className={classes.icons} />
              </InputAdornment>
            ),
          }}
          value={postData.Selectedfile}
          onChange={(e) => {
            setPostData({ ...postData, Selectedfile: e.target.value });
          }}
        />
        <div className={classes.fileInput}>
          <FileInput
            /* eslint-disable react/jsx-boolean-value */
            multiple={false}
            onDone={({ base64 }) => {
              setPostData({ ...postData, Selectedfile: 'base64' });
            }}
          />
        </div>
        <Button
          variant="contained"
          size="medium"
          fullwidth
          className={classes.button}
          startIcon={<SaveIcon />}
          type="submit"
          onSubmit={handleSubmit()}
        >
          Save
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
