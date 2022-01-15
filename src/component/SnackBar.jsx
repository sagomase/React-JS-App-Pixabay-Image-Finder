import { Snackbar, makeStyles } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert'

const useStyles =makeStyles({
    snack:{
        '& > *': {
            color :'#fff',
            backgroundColor: '#000000'
        }
    }
})

const SnackBar = ({open, toggleSnack}) => {

    const classes = useStyles();

    const handleClose = () =>{
        toggleSnack(false)
    }

    return (
        <Snackbar className={classes.snack} open={open} autoHideDuration={6000} onClose={handleClose}>
            <MuiAlert severity="info" onClose={handleClose}>
                Number of Images Should be Between 3 to 200
            </MuiAlert>
        </Snackbar>
    )
}
export default SnackBar;