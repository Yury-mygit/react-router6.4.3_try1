import React from 'react';
import cl from "./Root.module.css"
import { Link } from 'react-router-dom';

const Header = () => {
    let id = 1
    return (
        <div className={cl.header}> <h1>This is a Header component! </h1> 
            <div className={cl.links__container}>
                <Link to={'home'}         className={cl.links}> Home </Link>
                <Link to={'posts'}        className={cl.links}> Posts </Link>
                <Link to={'error'}        className={cl.links}> 404 Global</Link>
                <Link to={'item/' + id}   className={cl.links}> Item </Link>
                <Link to={'about'}        className={cl.links}> About </Link>
            </div>
        </div>
    );
};

export default Header;