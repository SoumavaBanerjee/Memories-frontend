import React, { useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grid,
  Grow,
  CssBaseline,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import memories from "./assets/images/memories.png";
import makeStyles from "./styles";

const App = () => {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isbigScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const gridProps = {
    direction: isbigScreen ? "row" : "column-reverse",
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
            {...gridProps}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
