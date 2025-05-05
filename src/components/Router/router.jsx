import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Banner from '../Layouts/Banner';
import Body from '../Layouts/Body';
import Login from '../../Pages/Login';
import Error from '../Error';
import Registration from '../../Pages/Registration';

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { path: '/', Component: Body },
        ],
    },
    {
        path: '/login',
        Component: Login,
    },
    {
        path: '/registration',
        Component: Registration,
    }
    ,
    {
        path: '*',
        Component: Error,
    }
]);


export default router;