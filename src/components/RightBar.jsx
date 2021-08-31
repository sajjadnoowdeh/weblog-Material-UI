import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
const useStyles = makeStyles(theme=>({
  container:{
    paddingTop:theme.spacing(10)
  }
}));
const RightBar = () => {
  const classes = useStyles();
  return <>
    
    <Container className={classes.container}>
      right bar
    </Container>
  
  </>;
};

export default RightBar;
