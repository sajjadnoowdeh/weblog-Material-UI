import React from "react";
import {  Button, makeStyles, Typography } from "@material-ui/core";
import { Container,Card ,CardActionArea,CardMedia,CardContent,CardActions} from "@material-ui/core";

const useStyles = makeStyles(theme=>({
  container:{
    paddingTop:theme.spacing(10)
  },
  media:{
      height:250
  },
  card:{
      marginBottom:theme.spacing(3)
  }
}));
const Post = () => {
  const classes = useStyles();
  return <>
    
       <Card className={classes.card}>
           <CardActionArea>
              <CardMedia
                className={classes.media}
                image={"https://material-ui.com/static/images/cards/contemplative-reptile.jpg"}
                title={"My Home Media"}
              />
              <CardContent>
                  <Typography gutterBottom variant={"h5"}>
                     First Post
                  </Typography>
                  <Typography variant={"body2"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, pariatur omnis. Quod, ratione ducimus veritatis quae, dicta itaque officia velit doloribus nobis impedit, delectus obcaecati officiis laboriosam! Eaque, assumenda reprehenderit.
                  </Typography>
              </CardContent>
           </CardActionArea>
           <CardActions>
               <Button>Share</Button>
               <Button>Learn more</Button>
           </CardActions>
       </Card>
  
  </>;
};

export default Post;
