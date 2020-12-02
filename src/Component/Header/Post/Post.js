import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import { Link } from 'react-router-dom';



<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
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

const Post = (props) => {
    const{title,body,id}=props.post;
    const classes = useStyles();
    
    
    return (
        <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
              Post no.{id} Title
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            Body
        </Typography>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
       <Link style={{textDecoration:'none'}} to={"/"+id} ><Button variant="outlined" color="primary">See More</Button></Link>

      
      </CardActions>
    </Card>
    );
};

export default Post;