import { TextField, Paper, Button, Typography } from "@material-ui/core";
import React from "react";
import makeStyles from "./styles";

const Form = () => {
  const classes = makeStyles();
  const handleSubmit = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit()}
      >
        <Typography variant="h6">Memory!</Typography>
        <TextField
          name="creator"
          label="Creator"
          variant="outlined"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default Form;
