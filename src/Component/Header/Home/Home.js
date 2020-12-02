import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Post from '../Post/Post';

const Home = () => {
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))

    },[])
    return (
        <div>
            <Header></Header>
            {
                posts.map(post=> <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;