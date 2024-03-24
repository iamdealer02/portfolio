"use client"
import React from 'react';
import Welcome from '@/components/shared/Welcome';
import AboutMe from '@/components/shared/AboutMe';
import Projects from '@/components/shared/Projects';

const Home = () => {

  return (
    <div>
      <Welcome/>
      <AboutMe/>
      <Projects/>

      {/* Title */}
      {/* Links */}
      {/* About me */}
    </div>
  );
};

export default Home;
