import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
const useStyles = makeStyles((theme) => ({}));
function App() {
  const classes = useStyles();
  return (
    <div>
        <Navbar/>
    </div>
  )
}

export default App;
