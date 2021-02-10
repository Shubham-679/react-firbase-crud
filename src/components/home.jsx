import React, {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import { TextField, Typography, Button, Card, CardActions, CardContent , Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPost } from "../redux/action"
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    title: {
        flexGrow: 1,
    },
    cardRoot : {
        maxWidth : 350,
        marginTop:25
    },
      cardTitle: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
}));

const initialValues = {title:'', description:''}

const Home = () => {
    const classes = useStyles();
    const posts = useSelector(state=>state.posts)
    const dispatch = useDispatch();
    const [values, setValues] = React.useState(initialValues);
    console.log(posts)
    useEffect(()=>{
      dispatch(getPost())
    },[])

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setValues({...values, [name]: value});
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted", values);
        dispatch(addPost(values));
        console.log("2")
    }

    const renderPost = () => {
       return _.map(posts, (post, key)=>{
         console.log(post.title)
         return (
         <React.Fragment>
           <p>{post.title}</p>
         </React.Fragment>
         )
      })
    }
   
    return (
      <div>
        {/* <Typography variant="h2" className={classes.title}>Blogs</Typography> */}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField 
            id="standard-basic" 
            label="Title" 
            name="title"
            value={values.title}
            onChange={handleChange}/>
          <TextField 
            id="standard-basic" 
            label="Description" 
            name="description"
            multiline
            value={values.description}
            onChange={handleChange} />
        </form>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>

        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            > 
            {posts.map(post => (
                <Grid item xs={12} sm={6}>
                <Card className={classes.cardRoot} variant="outlined">
                  <CardContent>
                    <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                     {post.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">{renderPost()}</Typography>
                    <Typography variant="body2" component="span">{renderPost()}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">Update</Button>
                    <Button size="small" color="secondary">Remove</Button>
                  </CardActions>
                </Card>
                </Grid>
            ))}
          </Grid>
      </div>
    );
};

export default Home;
