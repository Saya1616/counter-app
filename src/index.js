import React from "react";
import ReactDOM from 'react-dom';
import CounterApp from "./CounterApp";
//import PrimeraApp from "./PrimeraApp";
import './index.css';



const divRoot = document.querySelector('#root')
const valor = 0

ReactDOM.render(<CounterApp value ={valor} />, divRoot)

