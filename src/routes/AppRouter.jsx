import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { SignInClient } from '../components/user/login/SignInClient';
import { Auth } from '../pages/Auth';
import { LandingPage } from '../pages/LandingPage';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}>
        </Route>
        <Route path="/signin" element={<Auth/>}>
          <Route path="cliente" element={<SignInClient/>}>
          </Route>
        </Route>
      </Routes>
  )
}
