import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from 'react-router-dom';
import s from './App.module.css';
import React from 'react';
import {PATH} from './App';

export const Header:React.FC = () => {
    return <AppBar position="static">
        <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" color="inherit">
                <NavLink to={PATH.HOME} className={s.link} activeClassName={s.selected}>HOME PAGE</NavLink>
            </Typography>
            <Typography variant="h6" color="inherit">
                <NavLink to={PATH.EMPLOYEE} className={s.link} activeClassName={s.selected}>EMPLOYEE PAGE</NavLink>
            </Typography>
        </Toolbar>
    </AppBar>;
}