import React from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Header from './shreard/header';
import Footer from './shreard/Footer';
import Home from './pages/Home';
import Login from './pages/LogIn';
import './App.css';

function App() {
  const location = useLocation();

  // Determine whether to render the Header based on the current location
  const renderHeader = () => {
    return location.pathname !== '/' && location.pathname !== '/Regestration'  && <Header />;
  };
  
  // Determine whether to render the Footer based on the current location
  const renderFooter = () => {
    return location.pathname !== '/' && location.pathname !== '/Regestration' &&location.pathname !== '/ForgetPassword'&&<Footer />;
  };

  return (
    <>
      {renderHeader()}
      <Outlet/>
      {renderFooter()}
    </>
  );
}

export default App;
