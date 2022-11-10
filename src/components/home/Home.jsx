import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

import cl from './Home.module.css'

const Home = () => {

    console.log('home')

return (
        <div className={cl.wrapper}>
            <h1> Home components </h1>
            
        </div>
        
    );
};

export default Home;