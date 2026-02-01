import React from 'react';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import WhyNexora from '../components/WhyNexora';
import Process from '../components/Process';
import FeaturedProjects from '../components/FeaturedProjects';
import CallToAction from '../components/CallToAction';

const Home = () => {
    return (
        <>
            <Hero />
            <Expertise />
            <WhyNexora />
            <Process />
            <FeaturedProjects />
            <CallToAction />
        </>
    );
};

export default Home;
