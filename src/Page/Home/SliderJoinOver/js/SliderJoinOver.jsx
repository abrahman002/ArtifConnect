import React, { useEffect } from 'react';
import EmblaCarousel from './EmblaCarousel';
import '../css/embla.css';
import '../css/sandbox.css';
import AOS from "aos";
import "aos/dist/aos.css";


const OPTIONS = {}
const SLIDE_COUNT = 9
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const SliderJoinOver = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <main className="sandbox " data-aos="fade-up">

            <section className="sandbox__carousel">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </section>

        </main>
    );
};

export default SliderJoinOver;