import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      borderRadius:'5px',
      margin:'10px',
      boxShadow:'5px 5px 5px #D3D3D3',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


const Comment = (props) => {
    const{name,email,body}=props.comment
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h5" component="h2">User name:{name}</Typography>
            <br/>
            <Typography className={classes.title} color="textSecondary" gutterBottom>Email:{email}</Typography>
            <br/>
            <Typography variant="body2" component="p">Comment: {body} </Typography>
        </div>
    );
};

export default Comment;