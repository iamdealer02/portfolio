"use client"
import React from 'react';
import Welcome from '@/components/shared/Welcome';
import AboutMe from '@/components/shared/AboutMe';
import Projects from '@/components/shared/Projects';
import Contact from '@/components/shared/Contact';

const Home = () => {

  return (
    <div>
      <Welcome/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Home;
