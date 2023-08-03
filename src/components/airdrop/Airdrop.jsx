import React, { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Airdrop.css'

import { AiOutlinePieChart } from 'react-icons/ai'
import { PiCopySimpleFill } from 'react-icons/pi'
import { GiTiedScroll } from 'react-icons/gi'
import { tokenInfo } from '../../models/db';

const Airdrop = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyAddress = () => {
        const addressElement = document.getElementById('contract-address');
        const range = document.createRange();
        range.selectNode(addressElement);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        try {
            document.execCommand('copy');
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (error) {
            console.error('Unable to copy');
        } finally {
            window.getSelection().removeAllRanges();
        }
    };

    return (
        <div className='airdrop'>
            <div className="hello containers">
                <h2>Tokenomics <GiTiedScroll /></h2>
                <small>
                    The convergence between decentralized and traditional financial models is accelerating and we are here to power it.
                </small>

                <div className='hello-btn'>
                    <button className='ctq'>
                        Buy Token
                    </button>

                    <button className='cta'>
                        <span>Claim Airdrop</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="airdropmain containers">
                <div className="airdrop-left">
                    <img src={tokenInfo.logo} alt="$const" width={250} className='rounded-circle img-fluid' />
                </div>

                <div className="airdrop-right">
                    <div className="airdrop-top">
                        <h3>CONST Token</h3>
                        <p>
                            CONST is a general purpose, open-source Layer 1 blockchain specialized for for the exchange of digital assets.
                            Leveraging a novel consensus and technical breakthroughs.
                            <br /> <br />
                            Trusted by world class operators, investors and institutions.
                        </p>
                    </div>
                    <div className="airdrop-bottom">
                        <div className='ard-btm-col'>
                            <div className='ard-btm'>
                                <p>Token</p>
                                <p>CONST</p>
                            </div>
                            <div className='ard-btm'>
                                <p>Symbol</p>
                                <p>$CONST</p>
                            </div>
                            <div className='ard-btm'>
                                <p>Decimal</p>
                                <p>18</p>
                            </div>
                            <div className='ard-btm'>
                                <p>Supply</p>
                                <p>18 Million</p>
                            </div>
                        </div>

                        <div className="contract-address-col">
                            <p id="contract-address">
                                0xE7dDdAba05Ccc3A6a982f52501C3fB2B0c38c9A8
                            </p>
                            <button
                                onClick={handleCopyAddress}>
                                CONTRACT ADDRESS <PiCopySimpleFill />
                            </button>
                        </div>
                        {isCopied && <div className="copy-alert">Address copied!</div>}
                    </div>
                </div>
            </div>

            <div className='tokenomics-col containers'>
                <p><AiOutlinePieChart /> Token Allocation</p>

                <div>
                    <div className="progressbar-col">
                        <div className="progress-text">
                            <p> Public Launch</p>
                            <small>50%</small>
                        </div>
                        <ProgressBar
                            variant="success" now={50}
                            style={{ backgroundColor: '#000', border: "none" }} />
                    </div>

                    <div className="progressbar-col">
                        <div className="progress-text">
                            <p> Presale</p>
                            <small>30%</small>
                        </div>
                        <ProgressBar
                            variant="info" now={30}
                            style={{ backgroundColor: '#000', border: "none" }} />
                    </div>

                    <div className="progressbar-col">
                        <div className="progress-text">
                            <p>Airdrop</p>
                            <small>5%</small>
                        </div>
                        <ProgressBar
                            variant="warning" now={5}
                            style={{ backgroundColor: '#000', border: "none" }} />
                    </div>

                    <div className="progressbar-col">
                        <div className="progress-text">
                            <p> Teams & Developers</p>
                            <small>5%</small>
                        </div>
                        <ProgressBar
                            variant="danger" now={5}
                            style={{ backgroundColor: '#000', border: "none" }} />
                    </div>
                    <div className="progressbar-col">
                        <div className="progress-text">
                            <p>Marketing</p>
                            <small>7%</small>
                        </div>
                        <ProgressBar
                            variant="primary" now={7}
                            style={{ backgroundColor: '#000', border: "none" }} />
                    </div>

                    <div className="progressbar-col">
                        <div className="progress-text">
                            <p>Foundation</p>
                            <small>3%</small>
                        </div>
                        <ProgressBar
                            variant="secondary" now={3}
                            style={{ backgroundColor: '#000', border: "none" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Airdrop