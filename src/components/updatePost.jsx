import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography, Box } from "@material-ui/core";
import { useDispatch, connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    err : {
     padding : 65
    }
  }));

const UpdatePost = (props) => {

    const initialValues = { title: '', description: '' }
    const classes = useStyles();
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({})

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
    return ( 
        <div>
            <h1>Update Page</h1>
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
        </div>
     );
}
function mapStateToProps(state, ownProps) {
    return {
      posts: state.posts
    };
  }
export default connect(mapStateToProps, { })(UpdatePost);