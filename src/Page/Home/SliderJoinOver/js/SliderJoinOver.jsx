import React from 'react';
import EmblaCarousel from './EmblaCarousel';
import '../css/embla.css';
import '../css/sandbox.css'


const OPTIONS = {}
const SLIDE_COUNT = 9
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const SliderJoinOver = () => {

    return (
        <main className="sandbox ">

            <section className="sandbox__carousel">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </section>

        </main>
    );
};

export default SliderJoinOver;