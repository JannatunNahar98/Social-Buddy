import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const CommentHome = () => {
    const[comments,setComments]=useState([]);
    const{postId}=useParams()
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res=>res.json())
        .then(data=>setComments(data))

    },[])
    return (
        <div>
            {
                comments.map(comment=><Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default CommentHome;