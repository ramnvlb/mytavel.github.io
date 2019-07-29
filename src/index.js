import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import './index.css';
import './App.css';
import App from './App';

import WebFont from 'webfontloader';
{
  WebFont.load({
  custom: {
  families: ['Avenir-Medium'],
  urls: ['./Style/font/Avenir-Medium.ttf']
  }
  })

};



ReactDOM.render(
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  , document.getElementById('root'));
