import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';



const Post = () => {

    let  userId = useLoaderData();
    
    console.log(userId)
      
    return (
        <div>
            Hey hello! You are in Post
        </div>
    );
};

export default Post;