
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import Contact from './Contact';
import { Nav } from './Nav';
import { Todo } from './Todo';
import MobileList from './MobileList';
import { Card, CardContent } from '@mui/material';

export const Landing = () => {
    return (

        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/product' element={<Product />} />

                <Route path='/mobile' element={<MobileList />} />


            </Routes>
        </BrowserRouter>
        // <Todo />


    );
};

export default Landing;