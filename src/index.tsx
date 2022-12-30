import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from './components/button';
import './index.css';
import { Menu } from './pages/menu';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Menu/>
    <Button/>
  </React.StrictMode>
);