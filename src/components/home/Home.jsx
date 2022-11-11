import React, { useEffect } from 'react';
import { Outlet, useLocation  } from "react-router-dom";
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';

import cl from './Home.module.css'


const Home = () => {
    let locations = useLocation();
    console.log('home')
    console.log('location is' , locations)

return (
    <>
        <Header/>
        <div className={cl.wrapper}>
            <h1> Home components </h1>  
        </div>
        <Footer/>
    </>

        
    );
};

export default Home;