import './App.css';
import React from 'react';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';

const App = () => {
        return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <Profile /> 
            </div>
        )
    }

export default App;