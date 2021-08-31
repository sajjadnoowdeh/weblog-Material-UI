import React from "react";
import { makeStyles } from "@material-ui/core";
import Post from "./Post";
import { Container } from "@material-ui/core";
const useStyles = makeStyles(theme=>({
  container:{
    paddingTop:theme.spacing(10)
  }
}));
const Feed = () => {
  const classes = useStyles();
  return (
  <Container className={classes.container}>
   <Post/>
   <Post/>
   <Post/>
   <Post/>
  </Container>);
};

export default Feed;
