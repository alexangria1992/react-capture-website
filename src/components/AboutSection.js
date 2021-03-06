import React from 'react'
import home1 from '../img/home1.png';

import {About, Description, Image, Hide} from '../styles';
//FRAMER MOTION 
import {motion} from 'framer-motion'
const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                    <motion.h2>
                        <h2>We work to make</h2>
                    </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true.</motion.h2>
                    </Hide>
                </motion.div>

                <p>Contact us for any photography or videography ideas that you have.
                    We have professionals with amazing skills.
                </p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt=""/>
            </Image>
        </About>
    )
}





export default AboutSection
