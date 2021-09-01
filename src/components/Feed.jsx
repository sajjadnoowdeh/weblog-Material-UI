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
   <Post
    img={"https://material-ui.com/static/images/cards/contemplative-reptile.jpg"}
   />
   <Post
    img={"https://khabaloo.com/wp-content/uploads/2021/03/2.jpeg"}
   />
   <Post
    img={"https://iamss.ir/wp-content/uploads/2019/01/Good_Food_Display_-_NCI_Visuals_Online.jpg"}
   />
   <Post
    img={"https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg"}
   />
  </Container>);
};

export default Feed;
