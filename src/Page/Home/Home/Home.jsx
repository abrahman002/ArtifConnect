import React from 'react';
import Banner from '../Banner/Banner';
import OurService from '../OurService/OurService';
import AbouOurCompany from '../AboutOurCompany/AbouOurCompany';
import OurAsesomeService from '../../OurAwesomeService/OurAsesomeService';
import OurCaseStudies from '../OurCaseStudies/OurCaseStudies';


const Home = () => {

   

    return (
        <div>
            <Banner></Banner>
            <OurService></OurService>
            <AbouOurCompany></AbouOurCompany>
            <OurAsesomeService></OurAsesomeService>
            <OurCaseStudies></OurCaseStudies>
        </div>
    );
};

export default Home;