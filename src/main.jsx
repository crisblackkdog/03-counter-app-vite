import React from 'react'
import ReactDOM from "react-dom/client";
import { CounterApp } from "./counterApp";

import './style.css'
import { FirstApp } from './First-app';


ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <FirstApp title="hola soy vegteta" />
            
        </React.StrictMode>
        
);