import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Profile/>
            <Navbar/>
            <Sidebar/>
            <Footer/>
        </div>
    );
};

export default App;
