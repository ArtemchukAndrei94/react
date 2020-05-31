import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/profile/Profile";
import DialogsCont from "./components/dialogs/DialogsCont";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs/'>
                        <DialogsCont/>
                    </Route>
                    <Route path='/profile/'>
                        <Profile/>
                    </Route>
                </div>
                <Navbar/>
                <Sidebar/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;
