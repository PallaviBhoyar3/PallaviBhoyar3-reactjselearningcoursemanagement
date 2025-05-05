// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import React from 'react';
// import ReactDOM from 'react-dom/client';
import App from './App';
import { SidebarProvider } from './context/sidebar_context';
import { CoursesProvider } from './context/courses_context';
import { CartProvider } from './context/cart_context';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <SidebarProvider>
    <CoursesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CoursesProvider>
  </SidebarProvider>
)
