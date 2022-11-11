import React from 'react';
import { useLoaderData } from 'react-router-dom';
import cl from './Item.module.css'

import Footer from '../footer/Footer';
import Header from '../header/Header';

const Item = () => {

    let  item = useLoaderData();

    console.log('Item:item',item)

    return (
      <>
      <Header/>
        <div className={cl.wrapper}>
          
          <h1> You are in Item.</h1> 
          
          <div>
             item = {item.item}
          </div>
           
          
        </div>
        <Footer/>
    </>
    );
};

export default Item;