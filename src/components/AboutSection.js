import React from 'react'
import home1 from '../img/home1.png';
import {titleAnim, fade, photoAnim} from '../animation'
import Wave from './Wave'

import {About, Description, Image, Hide} from '../styles';
//FRAMER MOTION 
import {motion} from 'framer-motion'
const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                    <motion.h2 variants={titleAnim}>
                        <h2>We work to make</h2>
                    </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>

                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have.
                    We have professionals with amazing skills.
                </motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt=""/>
            </Image>
            <Wave/>
        </About>
    )
}





export default AboutSection
