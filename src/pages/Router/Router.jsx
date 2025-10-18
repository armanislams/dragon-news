import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../../layout/HomeLayout';
import Home from '../../components/Home';
import CategoryNews from '../CategoryNews';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
        {
            path: '',
            Component: Home
        },
        {
            path: '/category/:id',
            Component: CategoryNews,
            loader: ()=>fetch('/news.json')
        }
    ]
  },
]);