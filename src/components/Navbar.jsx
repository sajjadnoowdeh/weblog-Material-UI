import React,{useState} from "react";
import { alpha, AppBar, Badge, InputBase, makeStyles, Toolbar, Typography ,Avatar} from "@material-ui/core";
import { Cancel, Search } from "@material-ui/icons";
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
const useStyles = makeStyles(theme=>({
       logoLg:{
         display:"none",
         [theme.breakpoints.up("sm")]:{
           display:"block"
         }
       },
       logoSm:{
         [theme.breakpoints.up("sm")]:{
            display:"none"
         }
       },
       toolbar:{
         display:"flex",
         justifyContent:"space-between"
       },
       search:{
         display:"flex",
         alignItems:"center",
         backgroundColor:alpha(theme.palette.common.white, 0.15),
         '&:hover':{
          backgroundColor: alpha(theme.palette.common.white, 0.25),
         },
         borderRadius:theme.shape.borderRadius,
         width:"50%",
         [theme.breakpoints.down("sm")]:{
          display:(props)=> (props.open ? "flex" : "none"),
          width:"70%"
         },
       },
       searchIcon:{
         marginLeft:theme.spacing(1),
       },
       searchBtn:{
        [theme.breakpoints.up("sm")]:{
          display:"none"
        }
       },
       input:{
         marginLeft:theme.spacing(2),
         color:"white"
       },
       icons:{
         display:"flex",
         alignItems:"center",
         [theme.breakpoints.down("sm")]:{
          display:(props)=>(props.open ? "none" : "flex")
        }
       },
       notife:{
         marginRight:theme.spacing(2)
       },
       btnCancel:{
        [theme.breakpoints.up("sm")]:{
          display:"none"
       }
       }
}));
const Navbar = () => {
  const [open,setOpen] = useState(false);
  const classes = useStyles({open});
  return (
      <AppBar position={"fixed"}>
          <Toolbar className={classes.toolbar}>
              <Typography variant="h6" className={classes.logoLg}>
                    Lema Dev
              </Typography>
              <Typography variant="h5" className={classes.logoSm}>
                LAMA
              </Typography>
              <div className={classes.search}>
                  <Search className={classes.searchIcon}/>
                  <InputBase placeholder="search..." className={classes.input}/>
                  <Cancel onClick={()=>setOpen(false)} className={classes.btnCancel}/>
              </div>
              <div className={classes.icons}>
                <Search className={classes.searchBtn} onClick={()=>setOpen(true)}/>
                <Badge badgeContent={5} color={"secondary"} className={classes.notife}>
                  <MailIcon/>
                </Badge>
                <Badge badgeContent={2} color={"secondary"} className={classes.notife}>
                  <NotificationsIcon/>
                </Badge>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
              </div>
          </Toolbar>
      </AppBar>
  )
};

export default Navbar;
