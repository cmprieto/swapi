import React from "react";
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Swapi from '../services/Swapi';

const Layout = () => {
    return (
        <div>
            <Swapi />
            <Header />
            <Outlet />
        </div >
    )
}

export default Layout;