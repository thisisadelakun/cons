import React from 'react'
import About from '../about/About'
import Airdrop from '../airdrop/Airdrop'
import { Link } from 'react-scroll';

import './Page.css'
import '../airdrop/Airdrop.css'
import Countdown from '../coutdown/Countdown'
import { tokenInfo } from '../../models/db'
import Roadmap from '../roadmap/Roadmap'

import { FaLongArrowAltDown } from 'react-icons/fa'

const Pages = () => {
    return (
        <div className='page'>
            <header className='page-header'>
                <div className="containers">
                    <h1>
                        {tokenInfo.name2}<span className='headerspan'>.</span>
                    </h1>
                    <p>
                        The ($CONST) token ICO (including PRESALE and AIRDROP) is currently available for a limited time, so hurry up and
                        claim your ($CONST) tokens.
                    </p>

                    <div>
                        <Countdown />
                    </div>
                </div>

                <div className='hello-btn hello-btn-2 containers'>
                    <Link
                        to='buytoken'
                        smooth={true}
                        duration={500}
                        className='ctq'
                    >
                        Buy Token
                    </Link>

                    <Link
                        className='cta'
                        to='buytoken'
                        smooth={true}
                        duration={500}>
                        Claim Airdrop <FaLongArrowAltDown className='svg' />
                    </Link>
                </div>

                <div className="paper">
                    <div className="papercol"></div>
                </div>
            </header>

            <main>
                <About />
                <Airdrop />
                <Roadmap />
            </main>

            <footer></footer>
        </div>
    )
}

export default Pages