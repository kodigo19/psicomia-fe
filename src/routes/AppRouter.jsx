import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}>
        </Route>
      </Routes>
    </Router>
  )
}
