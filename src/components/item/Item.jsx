import React from 'react';
import { useLoaderData } from 'react-router-dom';
import cl from './Item.module.css'

const Item = () => {

    let  item = useLoaderData();

    console.log('Item:item',item)

    return (
        <div className={cl.wrapper}>
          <h1> You are in Item.</h1> 
          
          <div>
             item = {item.item}
          </div>
           
          
        </div>
    );
};

export default Item;