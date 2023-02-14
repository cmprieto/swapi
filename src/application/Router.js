import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import People from '../pages/People';
import CharactersCard from '../components/CharactersCard';
import Layout from './Layout';
import ProtectedRoute from './ProtectedRoute';
import { useCartContext } from './Provider.js';
import Landing from '../pages/Landing';


const Router = () => {
    const { user } = useCartContext();
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
                    <Route path={process.env.PUBLIC_URL + "/Character/:id/"} element={
                        <ProtectedRoute user={user}>
                            <CharactersCard />
                        </ProtectedRoute>
                    } />
                    {/*  <Route path="/people/?page=${:pages}" element={<Pagination/>} />  */}
                    <Route path={process.env.PUBLIC_URL + "/Characters/:pages/"} element={
                        <ProtectedRoute user={user}>
                            <People />
                        </ProtectedRoute>
                    } />
                    <Route path={process.env.PUBLIC_URL + "/Characters/"} element={
                        <ProtectedRoute user={user}>
                            <People />
                        </ProtectedRoute>} />
                    <Route path={process.env.PUBLIC_URL + "/landing"} element={<Landing />} />
                    <Route path="*" element={<div>404</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;