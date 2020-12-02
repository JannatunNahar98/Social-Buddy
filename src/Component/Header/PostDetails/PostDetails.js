import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentHome from '../CommentHome/CommentHome';
import Header from '../Header';
import { makeStyles, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        borderRadius: '5px',
        margin: '10px',
        boxShadow: '5px 5px 5px #D3D3D3',
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



const PostDetails = (props) => {
    const { postId } = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    const classes = useStyles();
    return (

        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    User id :{post.userId}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Post No. {postId}
                </Typography>
                <Typography variant="h5" component="h2">
                     Title: {post.title}
                 </Typography>
                 <br/>
                <Typography variant="body2" component="p">
                    comments
                </Typography>
                <CommentHome></CommentHome>
            </CardContent>
        </Card>


    );
};

export default PostDetails;



