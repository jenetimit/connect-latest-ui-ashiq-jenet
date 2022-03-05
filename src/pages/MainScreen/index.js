import React from 'react';
import Home from '../../pages/home/index'
import About from '../../pages/About/index'
// import Features from '../../pages/About/features'
import Service from '../../pages/services/index'
import Campaign from '../../pages/campaign/index'
import Package from '../../pages/Packages/index'
import Contact from '../../pages/contact/contact'
import Whyconnect from '../../pages/About/whyconnect'
import Pillars from '../../pages/About/pillars'
import Statistics from '../../pages/statistics/index';
import {  animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import Section from '../Section';

export default function index() {
  return (
    <>
    <Home/>
    <About />
    <Pillars />
    <Whyconnect />
    <Statistics />
    <Service />
    <Campaign />
    <Package />
    <Contact />
    </>
  );

}
