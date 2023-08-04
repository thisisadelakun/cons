import React, { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Airdrop.css'

import { Link } from 'react-scroll';

import { AiOutlinePieChart } from 'react-icons/ai'
import { PiCopySimpleFill } from 'react-icons/pi'
import { RiTokenSwapFill } from 'react-icons/ri'
import { tokenInfo } from '../../models/db';

import { FaLongArrowAltDown } from 'react-icons/fa';
import { TiInputChecked } from 'react-icons/ti';

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

    const handleCopySaleAddress = () => {
        const addressElement = document.getElementById('sale-address');
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
        <div className='airdrop' id='airdrop'>
            <div className="hello containers">
                <h2>Tokenomics <RiTokenSwapFill /></h2>
                <small>
                    The convergence between decentralized and traditional financial models is accelerating and we are here to power it.
                </small>

                <div className='hello-btn'>
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
                        to='
                     airdrop-claim'
                        smooth={true}
                        duration={500}>
                        Claim Airdrop <FaLongArrowAltDown className='svg' />
                    </Link>

                </div>
            </div>

            <div className="airdropmain containers">
                <div className="airdrop-left">
                    <img src={tokenInfo.roundlogo} alt="$const" className='' />
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

            <div className="sales-page">
                <div className="sales-col containers">
                    <div className="buytoken" id="buytoken">
                        <div className="buytoken-col">
                            <div className="buy-header">
                                <h2>
                                    Token Presale
                                </h2>
                            </div>
                            <div className="buy-main">
                                <div className="sale-address-col">
                                    <div className="sale-add-hd">
                                        <img src={tokenInfo.logobw} alt="$const" width={150} />
                                        <h5>$CONST Token</h5>

                                    </div>
                                    <p className='presalep'>
                                        Pre-sale Address
                                    </p>

                                    <p id="sale-address">
                                        0xE7dDdAba05Ccc3A6a982f52501C3fB2B0c38c9A8
                                    </p>
                                    <button
                                        onClick={handleCopySaleAddress}>
                                        Copy <PiCopySimpleFill />
                                    </button>

                                    <div className="prices">
                                        <p><TiInputChecked className='prices-icon' />1 ETH = 5,000 $CONST</p>
                                        <p><TiInputChecked className='prices-icon' />Min Buy: 0.01 ETH</p>
                                        <p><TiInputChecked className='prices-icon' />Max Buy: 1 ETH</p>
                                        <p><TiInputChecked className='prices-icon' />Listing Price: $2</p>
                                        <p><TiInputChecked className='prices-icon' />$CONST Will List on 31st August, 2023 on UNISWAP and others Exchanges. </p>
                                    </div>
                                </div>
                            </div>
                            {isCopied && <div className="copy-alert">Address copied!</div>}
                        </div>

                    </div>

                    <div className="airdrop-claim" id="airdrop-claim">
                        <div className="buytoken-col">
                            <div className="buy-main">
                                <div className="airdrop-col">
                                    <div className="airdrop-col-hd">
                                        <img src={tokenInfo.roundlogo} alt="$const" width={300} />
                                        <h4>Airdrop</h4>
                                    </div>

                                    <div className="airdrop-main">
                                        <li>Coming Soon...</li>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Airdrop