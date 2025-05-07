import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Body from '../Layouts/Body';
import Login from '../../Pages/Login';
import Error from '../Error';
import Registration from '../../Pages/Registration';
import PrivateRoute from '../AuthProvider/PrivateRoute';
import BillsPage from '../../Pages/BillsPage';
import BillDetails from '../../Pages/BillDetails';
import Profile from '../../Pages/Profile';
import ForgetPassword from '../../Pages/ForgetPassword';

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { path: '/', Component: Body },
            {
                path: '/bills-page',
                element: <PrivateRoute>
                    <BillsPage></BillsPage>
                </PrivateRoute>,
                loader: () => fetch('/billDetails.json'),
                hydrateFallbackElement: <span></span>,
            },
            {
                path: '/bills-details/:id',
                loader: () => fetch('/billDetails.json'),
                element: <PrivateRoute>
                    <BillDetails></BillDetails>
                </PrivateRoute>,
            },
            {
                path: '/my-profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>,
            },
            { path: '/login', Component: Login },
            { path: '/registration', Component: Registration },
            { path: '/reset-password', Component: ForgetPassword }
        ],
    },
    ,
    {
        path: '*',
        Component: Error,
    },

]);


export default router;