import React from 'react'
import '../css/styles.css';
import { LandingContent } from '../components/landing/LandingContent';
import { LandingFooter } from '../components/landing/LandingFooter';
import { Navbar } from '../components/landing/Navbar';

export const LandingPage = () => {
  return (
    <>
      <Navbar/>
      <LandingContent/>
      <LandingFooter/>
    </>
  )
}
