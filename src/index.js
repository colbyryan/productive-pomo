import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Pomo } from './components/Pomo';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Pomo />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
