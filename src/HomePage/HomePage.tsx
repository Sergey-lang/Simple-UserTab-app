import React, {useState} from 'react';
import {Typography} from '@material-ui/core';

export const HomePage: React.FC = () => {
    return (
        <>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Home page
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Simple React Page with useState, Material-UI, React Router Dom.
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Page "Employees" contains table with Employees. You can add new employee and fill name field or remove employee item.
            </Typography>
        </>
    )
}