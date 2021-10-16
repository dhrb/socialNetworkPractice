import './App.css';
import React from 'react';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";


const App = () => {
        return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Profile className='app-wrapper-content'/>
                    {/*<Dialogs/>*/}
                </div>


            </div>
        )
    }

export default App;