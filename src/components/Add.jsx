import React from "react";
import { makeStyles, Modal,Container ,TextField, MenuItem} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { Tooltip,Fab } from "@material-ui/core";
const useStyles = makeStyles(theme=>({
 fab:{
     position:"fixed",
     right:30,
     bottom:20
 },
 container:{
     width:500,
     height:550,
     backgroundColor:"white",
     position:"absolute",
     top:0,
     right:0,
     left:0,
     bottom:0,
     margin:"auto",
     [theme.breakpoints.down("sm")]:{
         width:"100vw",
         height:"100vh"
     }
 }
}));
const Add = () => {
  const classes = useStyles();
  const [open,setOpen] = React.useState(false);
  return (
      <>
    <Tooltip title="Add" aria-label="add" onClick={()=>setOpen(true)}>
    <Fab color="primary" className={classes.fab}>
      <AddIcon />
    </Fab>
  </Tooltip>
  <Modal open={open} className={classes.modal}>
      <Container className={classes.container}>
         <form autoComplete={"off"}>
             <div className={classes.item}>
              <TextField id="standard-basic" label="Title" size={"sm"} style={{width:"100%"}}/>
             </div>
             <div className={classes.item}>
              <TextField 
               id="standard-multiline-static"
               variant={"outlined"}
               multiline
               rows={4}
               defaultValue="Tell your story..."
               label="Description" 
               size={"sm"} 
               style={{width:"100%"}}/>
             </div>

             <div className={classes.item}>
              <TextField 
               select
               value={"public"}
               label={"visibility"}
               style={{width:"100%"}}>
                <MenuItem value={"public"}>public</MenuItem>
                <MenuItem value={"private"}>private</MenuItem>
                <MenuItem value={"unListed"}>unListed</MenuItem>
               </TextField>
             </div>

         </form>
      </Container>
  </Modal>
  </>
  )
};

export default Add;
