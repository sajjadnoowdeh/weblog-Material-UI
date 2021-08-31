import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Mail } from "@material-ui/icons";
const useStyles = makeStyles(theme =>({
  container:{
    paddingTop:theme.spacing(10),
    height:"100vh",
    color:"white",
    backgroundColor:theme.palette.primary.main,
    [theme.breakpoints.up("sm")]:{
      backgroundColor:"white",
      color:"#555",
      border:"1px solid #ece7e7"
    }
  },
  item:{
    display:"flex",
    alignItems:"center",
    marginBottom:theme.spacing(4),
    [theme.breakpoints.up("sm")]:{
      marginBottom:theme.spacing(4),
      cursor:"pointer"
    }
  },
  text:{
    fontWeight:"500",
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
  },
  icon:{
    marginRight:theme.spacing(2),
    [theme.breakpoints.up("sm")]:{
      fontSize:"18px"
    }
  }
}));
const Leftbar = () => {
  const classes = useStyles();
  return (
     <Container className={classes.container}>
       <div className={classes.item}>
         <Mail className={classes.icon}/>
         <Typography className={classes.text}>
            Home
         </Typography>
       </div>
       <div className={classes.item}>
         <PersonIcon className={classes.icon}/>
         <Typography className={classes.text}>
            Friends
         </Typography>
       </div>
       <div className={classes.item}>
         <ListIcon className={classes.icon}/>
         <Typography className={classes.text}>
            Lists
         </Typography>
       </div>
       <div className={classes.item}>
         <CameraAltIcon className={classes.icon}/>
         <Typography className={classes.text}>
            Camera
         </Typography>
       </div>
       <div className={classes.item}>
         <VideocamIcon className={classes.icon}/>
         <Typography className={classes.text}>
            Video
         </Typography>
       </div>
       <div className={classes.item}>
         <PhoneIphoneIcon className={classes.icon}/>
         <Typography className={classes.text}>
            App
         </Typography>
       </div>
       <div className={classes.item}>
         <SettingsIcon className={classes.icon}/>
         <Typography className={classes.text}>
            Setting
         </Typography>
       </div>
       <div className={classes.item}>
         <ExitToAppIcon className={classes.icon}/>
         <Typography className={classes.text}>
            Log out
         </Typography>
       </div>
     </Container>
  );
};

export default Leftbar;
