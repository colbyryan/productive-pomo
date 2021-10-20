import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Pomo } from './components/Pomo';
import SettingsContextProvider from './context/SettingsContext';

ReactDOM.render(
    <SettingsContextProvider>
        <Router>
            <Pomo />
        </Router>
    </SettingsContextProvider>,
    document.getElementById('root')
);
