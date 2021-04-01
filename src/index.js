import React from "react";
import ReactDOM from 'react-dom';
import PrimeraApp from "./PrimeraApp";
import './index.css';



const divRoot = document.querySelector('#root')
const saludo= 'Hola, Soy Goku'

ReactDOM.render(<PrimeraApp saludo = {saludo} />, divRoot)

