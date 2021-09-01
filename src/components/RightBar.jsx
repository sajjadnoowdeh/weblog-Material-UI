import React from "react";
import { makeStyles ,Avatar,Typography,ImageList,ImageListItem,Link,Divider} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { Container } from "@material-ui/core";
const useStyles = makeStyles(theme=>({
  container:{
    paddingTop:theme.spacing(10),
    position:"sticky",
    top:0
  },
  title:{
    fontSize:16,
    fontWeight:500,
    color:"#555"
  },
  link:{
    marginRight:"15px",
    color:"#555"
  }
}));
const RightBar = () => {
  const classes = useStyles();
  return <>
    
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
          Online Friends
      </Typography>
      <AvatarGroup max={4} style={{marginBottom:"15px"}}>
        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg"/>
        <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="	https://material-ui.com/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="" />
      </AvatarGroup>

      <Typography className={classes.title} gutterBottom>
         Gallery
      </Typography>
      <ImageList rowHeight={160} className={classes.imageList} cols={2} style={{marginBottom:"7px"}}>

          <ImageListItem >
            <img src={"https://material-ui.com/static/images/image-list/honey.jpg"} alt={""} />
          </ImageListItem>
          <ImageListItem >
            <img src={"https://material-ui.com/static/images/image-list/plant.jpg"} alt={""} />
          </ImageListItem>
          <ImageListItem >
            <img src={"https://material-ui.com/static/images/image-list/mushroom.jpg"} alt={""} />
          </ImageListItem>
          <ImageListItem >
            <img src={"https://material-ui.com/static/images/image-list/olive.jpg"} alt={""} />
          </ImageListItem>
          <ImageListItem >
            <img src={"https://material-ui.com/static/images/image-list/star.jpg"} alt={""} />
          </ImageListItem>
          <ImageListItem >
            <img src={"https://material-ui.com/static/images/image-list/bike.jpg"} alt={""} />
          </ImageListItem>
          
      </ImageList>
        <Typography className={classes.title} gutterBottom>
          Category
        </Typography>
        <Link className={classes.link} href={"#"} variant={"body2"}>
            Sport
        </Link>
        <Link className={classes.link} href={"#"} variant={"body2"}>
            Food
        </Link>
        <Link className={classes.link} href={"#"} variant={"body2"}>
            life
        </Link>
        <Divider flexItem/>
        <Link className={classes.link} href={"#"} variant={"body2"}>
            Movies
        </Link>
        <Link className={classes.link} href={"#"} variant={"body2"}>
            Science
        </Link>
        
        <Link className={classes.link} href={"#"} variant={"body2"}>
            Music
        </Link>
     
    </Container>
  
  </>;
};

export default RightBar;
