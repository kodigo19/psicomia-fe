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
import { RecoveryPassword } from '../components/user/helpdesk/RecoveryPassword';
import { LoginUser } from '../components/user/login/LoginUser';
import { SignUpClient } from '../components/user/signup/SignUpClient';
import { SignUpPsychologist } from '../components/user/signup/SignUpPsychologist';
import { Auth } from '../pages/Auth';
import { LandingPage } from '../pages/LandingPage';
import { NotFound } from '../pages/NotFound';
import { DashboardPsychologist } from '../psychologist/DashboardPsychologist';
import { Psychologist } from '../psychologist/Psychologist';
import { PrivateRouteClient, PrivateRoutePsychologist } from './PrivateRoutes';

export const AppRouter = () => {
  const authUser = useSelector(state => state.auth.user);

  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}
        >
        </Route>
        <Route path="/pricing" element={<Pricing/>} />
        {/* <Route path="/services" element={<Services/>} /> */}
        <Route path="/faqs" element={<Faqs/>} />
        <Route path="/login" element={<Auth/>}>
          <Route path="user" element={<LoginUser/>}>
          </Route>
          <Route path="recovery" element={<RecoveryPassword/>}>
          </Route>
        </Route>
        <Route path="/signup" element={<Auth/>}>
          <Route path="client" element={<SignUpClient/>}>
          </Route>
          <Route path="psychologist" element={<SignUpPsychologist/>}>
          </Route>
        </Route>

        <Route path="/client" element={
          <PrivateRouteClient>
            <Client/>
          </PrivateRouteClient>
        }>
          <Route path="dashboard" element={<DashboardClient/>}/>
          <Route path="checkout" element={<CheckoutPage/>}/>
          <Route path="checkout/redirect" element={<CheckoutPageRedirect/>}/>
        </Route>
        <Route path="/psychologist" element={
          <PrivateRoutePsychologist>
            <Psychologist/>
          </PrivateRoutePsychologist>
        }>
          <Route path="dashboard" element={<DashboardPsychologist/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
  )
}
