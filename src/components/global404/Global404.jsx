import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import cl from './Global404.module.css'
import { useEffect } from 'react';

import { useNavigate } from "react-router-dom";

const Global404 = () => {

    const navigate = useNavigate();

    const [timer, setTimer] = useState(5)

    

    useEffect(()=>{
        setTimeout(()=>{
            // navigate("/home");
            // console.log(timer)
            timer >= 1 ? setTimer(timer - 1) : setTimer(0)
            if (timer==0) navigate("/home");
        },"1000")
        
    }, [timer])

    return (
        <div>
            <Header/>
            <div className={cl.wrapper}>
                <h1> Sorry page not found </h1>
                <h3> You will be returned to home in {timer} second </h3>
            </div>
            <Footer/>
        </div>
    );
};

export default Global404;