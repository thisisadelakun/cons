import React from 'react'
import './About.css'

import {GiTiedScroll} from 'react-icons/gi'

import { tokenAbout, tokenInfo } from '../../models/db'

const About = () => {
    return (
        <div className='about'>
            <div>
                <h2 className='containers'>About <GiTiedScroll/></h2>
            </div>
            <div className="about-profile">
                <div className="about-profile-img">
                    <img src={tokenInfo.scrolls} alt="scrolls" width={200} height={190} />
                </div>
                <div className="about-profile-txt">
                    <p>{tokenAbout.pg1}</p>
                </div>
            </div>

            <div className="about-profile rtl">
                <div className="about-profile-img">
                    <img src={tokenInfo.warrior} alt="warrior" width={200} height={200}/>
                </div>
                <div className="about-profile-txt">
                    <p>{tokenAbout.pg2}</p>
                </div>
            </div>

        </div>
    )
}

export default About