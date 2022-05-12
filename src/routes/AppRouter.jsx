import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Client } from '../client/Client';
import { DashboardClient } from '../client/DashboardClient';
import { SignInClient } from '../components/user/login/SignInClient';
import { Auth } from '../pages/Auth';
import { LandingPage } from '../pages/LandingPage';
import { PrivateRouteClient } from './PrivateRoutes';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}>
        </Route>
        <Route path="/signin" element={<Auth/>}>
          <Route path="client" element={<SignInClient/>}>
          </Route>
        </Route>
        <Route path="/client" element={
          <PrivateRouteClient>
            <Client></Client>
          </PrivateRouteClient>
        }>
          <Route path="dashboard" element={<DashboardClient/>}/>
        </Route>
      </Routes>
  )
}
