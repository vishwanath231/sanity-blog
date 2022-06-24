import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screen/HomeScreen';
import SinglePostScreen from './screen/SinglePostScreen';
import AuthorScreen from './screen/AuthorScreen';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={ <HomeScreen /> } />
                <Route path='/post/:slug' element={ <SinglePostScreen /> } />
                <Route path='/author' element={ <AuthorScreen /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;