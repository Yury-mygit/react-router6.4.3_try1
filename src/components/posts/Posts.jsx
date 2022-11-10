import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { useLoaderData } from 'react-router-dom';
import cl from './Posts.module.css'

const Posts = () => {

    let  userId = useLoaderData();

    console.log('Posts',userId)

    return (
        <div className={cl.wrapper}>
            <h1> There is a Posts component </h1>
            <Link to={'/home'} >Return to home</Link>
            <Outlet></Outlet>

            {userId.map((value, index, array) => {
                return (
                    <div key={index} className={cl.post}>
                        <div style={{display:'flex'}}>
                            <div style={{marginRight:'20px'}}>UserId:{value.userId} </div>
                            <div>Id:{value.id} </div>
                        </div>
                        <div>{value.title} </div>
                        <div>{value.body} </div>
                    </div>)
            })}
           
        </div>
    );
};

export default Posts;