import React from 'react';
import { Link } from 'react-router-dom';
import cl from './About.module.css'

import Footer from '../footer/Footer';
import Header from '../header/Header';

const About = () => {

    console.log('about')

    return (
        <>
        <Header/>
        <div className={cl.wrapper}>
            <h1>About</h1>

            <Link to={'/home'}> Home </Link>
        </div>
        <Footer/>
        </>
    );
};

export default About;