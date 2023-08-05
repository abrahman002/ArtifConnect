import React from 'react';
import Banner from '../Banner/Banner';
import OurService from '../OurService/OurService';
import AbouOurCompany from '../AboutOurCompany/AbouOurCompany';
import OurAsesomeService from '../../OurAwesomeService/OurAsesomeService';
import OurCaseStudies from '../OurCaseStudies/OurCaseStudies';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import TabSection from '../TabSection/TabSection';
import Webdevelops from '../WebDevelops/Webdevelops';
import PricingPlan from '../PricingPlan/PricingPlan';


const Home = () => {

   

    return (
        <div>
            <Banner></Banner>
            <OurService></OurService>
            <AbouOurCompany></AbouOurCompany>
            <OurAsesomeService></OurAsesomeService>
            <OurCaseStudies></OurCaseStudies>
            <WhyChooseUs></WhyChooseUs>
            <TabSection></TabSection>
            <Webdevelops></Webdevelops>
            <PricingPlan></PricingPlan>
        </div>
    );
};

export default Home;