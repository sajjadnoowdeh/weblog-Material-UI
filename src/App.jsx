import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar"
const useStyles = makeStyles((theme) => ({
  right:{
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
  }
}));
function App() {
  const classes = useStyles();
  return (
    <>
        <Navbar/>
        <Grid container>
           <Grid item sm={2} xs={2}>
              <Leftbar/>
           </Grid>
           <Grid item sm={7} xs={10}>
              <Feed/>
           </Grid>
           <Grid item sm={3} className={classes.right}>
              <RightBar />
           </Grid>

        </Grid>
    </>
  )
}

export default App;
