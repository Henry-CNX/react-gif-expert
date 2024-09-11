import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import { GifExpertApp } from "./GifExpertApp";
//https://www.netlify.com/
//https://app.netlify.com/sites/gif-expert-henry/deploys/66e0e2e239d2e64b458add44
import "./styles.css";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)
