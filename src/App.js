import React, { useEffect, useState } from 'react';
import {
  Container,
  AppBar,
  Typography,
  Grid,
  Grow,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import memories from './assets/images/memories.png';
import makeStyles from './styles';

const App = () => {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isbigScreen = useMediaQuery(theme.breakpoints.up('md'));
  const gridProps = {
    direction: isbigScreen ? 'row' : 'column-reverse',
  };

  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container spacing={2}>
          <Grid
            container
            justify="space-between"
            alignItems="flex-start"
            spacing={3}
            /* eslint-disable react/jsx-props-no-spreading */
            {...gridProps}
          >
            <Grid item xs={12} md={8}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
