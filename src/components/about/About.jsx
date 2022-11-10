import React from 'react';
import { Link } from 'react-router-dom';
import cl from './About.module.css'

const About = () => {

    console.log('about')

    return (
        <div className={cl.wrapper}>
            <h1>About</h1>

            <Link to={'/home'}> Home </Link>
        </div>
    );
};

export default About;