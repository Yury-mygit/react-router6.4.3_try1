import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Root = () => {

    const navigate = useNavigate();
    let  item = useLoaderData();

    // console.log(item)
    console.log('root')

    useEffect(()=>{
        
        // navigate("/home");
    },[])

    return (
        <>
         <Header/>
         <Outlet/>  
         <Footer/>
        </>
        
    )

};

export default Root;