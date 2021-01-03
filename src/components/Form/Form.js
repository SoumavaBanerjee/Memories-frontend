import { TextField, Paper, Button, Typography } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import InputAdornment from "@material-ui/core/InputAdornment";

import React from "react";
import makeStyles from "./styles";

const Form = () => {
  const classes = makeStyles();
  const handleSubmit = () => {};
  return (
    <Paper elevation={3} className={classes.paper}>
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountBoxIcon
                  fontSize="small"
                  className={classes.accountBox}
                />
              </InputAdornment>
            ),
          }}
        />
      </form>
    </Paper>
  );
};

export default Form;
