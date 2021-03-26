import React from  'react';
import classes from './Navbar.module.css';
import {motion} from 'framer-motion';
import {menuLinks} from "./menu";
import {Link} from 'react-router-dom';

const menuVariant = {
    hidden : {
        x: '-100vw', 
        opacity: 0,
        transition :{duration: 0.5, type:'spring', stiffness: 80}
    },
    visible :{
        x:0, 
        opacity:1,
        transition :{duration: 0.5, type:'spring', stiffness: 80}
    }
}

const navbar = () => {
    return (
        <motion.div className = {classes.navbar} 
            variants={menuVariant}
            initial="hidden"
            animate="visible">
            <div className={classes.content}>                
                <ul className={classes.items}>
                    <li className={classes.header}>
                        <div className={classes.headContent}>AI</div>   
                    </li>
                    {/* data from menu.js */}
                    {
                        menuLinks.map((navLink,index)=>{
                            return (
                                <li onClick={document.querySelector('.navbar').style.display = 'none'} className={classes.item} key={index}>
                                    <Link to={navLink.link} className={classes.link} href={navLink.href}>
                                        <span className={classes.icon}>{navLink.icon}</span>
                                        <span className={classes.text}>{navLink.text}</span>
                                    </Link> 
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={classes.footer}>
                <span className={classes.fContent}>Created in React</span> 
            </div>
        </motion.div>
    )
};

export default navbar;