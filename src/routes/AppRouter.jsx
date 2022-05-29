import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Client } from '../client/Client';
import { DashboardClient } from '../client/DashboardClient';
import { CheckoutPage } from '../components/payment/CheckoutPage';
import { CheckoutPageRedirect } from '../components/payment/CheckoutPageRedirect';
import { Faqs } from '../components/shared/Faqs';
import { Pricing } from '../components/shared/Pricing';
import { Services } from '../components/shared/Services';
import { LoginUser } from '../components/user/login/LoginUser';
import { Auth } from '../pages/Auth';
import { LandingPage } from '../pages/LandingPage';
import { PrivateRouteClient } from './PrivateRoutes';

export const AppRouter = () => {
  const authUser = useSelector(state => state.signInUser.user);

  return (
    <Routes>
        <Route path="/" element={ !authUser ?
         <LandingPage/> : <DashboardClient/>
      }
        >
        </Route>
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/faqs" element={<Faqs/>} />
        <Route path="/signin" element={<Auth/>}>
          <Route path="client" element={<LoginUser/>}>
          </Route>
        </Route>
        <Route path="/client" element={
            <Client/>
        }>
          <Route path="dashboard" element={<DashboardClient/>}/>
          <Route path="checkout" element={<CheckoutPage/>}/>
          <Route path="checkout/redirect" element={<CheckoutPageRedirect/>}/>
        </Route>
      </Routes>
  )
}
