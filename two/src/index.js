import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let title = "My site";
let slogan = "I am learning React";
let nav = {"Главная": "/index", "Новости": "/news", "О компании": "/about", "Магазин": "/shop", "Контакты": "/contacts"};
let copy = "Copyright - 2025"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      text={title} 
      slogan={slogan}
      navigation={nav}
      copy={copy}  />
  </React.StrictMode>
);


