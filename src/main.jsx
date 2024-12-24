import React from 'react'
import ReactDOM from "react-dom/client";
import { CounterApp } from "./counterApp";

import './style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <CounterApp value = {1234} />
        </React.StrictMode>
        
);