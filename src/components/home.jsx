import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid, CardContent, Card, CardActions, Typography, Box } from "@material-ui/core";
import { connect } from "react-redux";
import { addPost, getPost, removePost } from "../redux/action"
import _ from "lodash";
import Post from "./post";
import {Link} from "react-router-dom";

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
  cardRoot: {
    minWidth: 275,
    marginTop: 25,
    transition: theme.transitions.create(["background", "background-color"], {
      duration: theme.transitions.duration.complex,
    }),
    "&:hover": {
      backgroundColor: "#e0e2f4",
    },
  },
  cardTitle: {
    fontSize: 25,
  },
  err : {
   padding : 65
  },
  link : {
    textDecoration : "none"
  }
}));

const initialValues = { title: '', description: '' }

const Home = (props) => {
  const classes = useStyles();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    props.getPost()
  }, [])

  const validate = () => {
    const errors = {};
    if (values.title.trim() === "") errors.title = "Title is required !";
    if (values.description.trim() === "") errors.description = "Description is required !";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const er = validate();
    setErrors((errors) => er || {});
    if (er) return;
    props.addPost(values);
    setValues(initialValues)
  }

  const renderPost = () => {
    return _.map(props.posts, (post, keys) => {
      return (
        <Post key={keys}>
          <Card className={classes.cardRoot} variant="outlined" >
            <CardContent>
              <Typography className={classes.cardTitle} variant="body2"
                component="span">{post.title}</Typography>
              <Typography color="textSecondary" gutterBottom>
                {post.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                <Link className={classes.link} to={`/update/${keys}`}>Update</Link>
                </Button>
              <Button size="small" color="secondary"
                onClick={() => props.removePost(keys)}
              >Remove</Button>
            </CardActions>
          </Card>
        </Post>
      )
    })
  }

  return (
    <div>
      {/* <Typography variant="h2" className={classes.title}>Blogs</Typography> */}
      <Box mt={4}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Title"
            name="title"
            required
            multiline
            rows={1}
            value={values.title}
            onChange={handleChange}
            inputProps={{
              maxLength: 20,
            }}
          />
          
          <TextField
            id="standard-basic"
            label="Description"
            name="description"
            multiline
            required
            value={values.description}
            onChange={handleChange}
            rows={1}
            inputProps={{
              maxLength: 100,
            }}
          />
        </form>
        {errors.title && (
          <Typography className={classes.err} component="span" color="secondary" >{errors.title}</Typography>
        )}
        {errors.description && (
          <Typography className={classes.err}  component="span" color="secondary">{errors.description}</Typography>
        )}
      </Box>
      <Box mt={4}>
        <Button variant="contained" color="primary" onClick={handleSubmit} mt={10}>
          Submit
        </Button>
      </Box>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {renderPost()}
      </Grid>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
export default connect(mapStateToProps, { getPost, addPost, removePost })(Home);
