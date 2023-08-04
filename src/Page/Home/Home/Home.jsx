import React from 'react';
import Banner from '../Banner/Banner';
import OurService from '../OurService/OurService';
import AbouOurCompany from '../AboutOurCompany/AbouOurCompany';
import OurAsesomeService from '../../OurAwesomeService/OurAsesomeService';


const Home = () => {

   

    return (
        <div>
            <Banner></Banner>
            <OurService></OurService>
            <AbouOurCompany></AbouOurCompany>
            <OurAsesomeService></OurAsesomeService>
        </div>
    );
};

export default Home;