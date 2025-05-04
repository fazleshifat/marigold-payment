import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Banner from '../Layouts/Banner';
import Body from '../Layouts/Body';

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { path: '/', Component: Body },
        ],
    },
]);


export default router;