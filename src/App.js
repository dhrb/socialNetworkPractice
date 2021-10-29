import './App.css';
import React from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/ProfileInfo/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";

const App = () => {
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header />
                    <Navbar />
                        <div className='app-wrapper-content'>
                            <Switch>
                            <Route
                                path={'/profile'}
                                component={Profile}
                            />
                            <Route
                                exact path={'/dialogs'}
                                component={Dialogs}
                            />
                            </Switch>
                        </div>
                </div>
            </BrowserRouter>
        )
    }

export default App;