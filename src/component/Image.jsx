
import { Card, makeStyles } from '@material-ui/core'
import { BorderAll } from '@material-ui/icons';

const useStyles = makeStyles({
    image: {
        height:300,
        width:"100%",
        objectFit:'cover',
        border: '2px solid gray'
    }
})

const Images = ({ image }) => {
    const classes = useStyles();
    return (
        <Card>
            <img src={image.largeImageURL} className={classes.image} alt='Not Found'/>
        </Card>

    )
}
export default Images;