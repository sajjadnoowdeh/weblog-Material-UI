import React from "react";

import { makeStyles,Button,Snackbar, Modal,Container ,TextField, MenuItem,Radio,RadioGroup,FormControlLabel,FormLabel} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import MuiAlert from '@material-ui/lab/Alert';
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
 },
 form:{
   padding:theme.spacing(2)
 },
 item:{
   marginBottom: theme.spacing(3)
 }
}));
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Add = () => {
  const classes = useStyles();
  const [open,setOpen] = React.useState(false);
  const [openAlert,setOpenAlert] = React.useState(false)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  return (
      <>
    <Tooltip title="Add" aria-label="add" onClick={()=>setOpen(true)}>
    <Fab color="primary" className={classes.fab}>
      <AddIcon />
    </Fab>
  </Tooltip>
  <Modal open={open} className={classes.modal}>
      <Container className={classes.container}>
         <form autoComplete={"off"} className={classes.form}>
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

             <div className={classes.item}>
             <FormLabel component="legend">Who and Comment?</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" >
                    <FormControlLabel value="female" control={<Radio small={"small"} />} label="Female" />
                    <FormControlLabel value="male" control={<Radio small={"small"} />} label="Male" />
                    <FormControlLabel value="other" control={<Radio  small={"small"}/>} label="Other" />
                    <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                </RadioGroup>
             </div>
             <div className={classes.item}>
                <Button color="primary"  onClick={()=>setOpenAlert(true)} variant={"outline"} >Create</Button>
                <Button color="secondary"  variant={"outline"} onClick={()=>setOpen(false)} >Cancel</Button>
             </div>
         </form>
         <Snackbar open={openAlert} 
          autoHideDuration={3000} 
          onClose={handleClose}
          anchorOrigin={{ vertical:"bottom", horizontal:"left" }}
          >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
      </Container>
  </Modal>
  </>
  )
};

export default Add;
