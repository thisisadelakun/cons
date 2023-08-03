import React from 'react'
import About from '../about/About'
import Airdrop from '../airdrop/Airdrop'

import './Page.css'
import Countdown from '../coutdown/Countdown'
import { tokenInfo } from '../../models/db'
import Roadmap from '../roadmap/Roadmap'

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

                <div className='paper1'>
                    <div className="papercol">
                    </div>
                </div>
            </header>



            <main>
                <About />
                <Airdrop />
                <Roadmap/>
            </main>

            <footer></footer>
        </div>
    )
}

export default Pages