import React from 'react'
import './Footer.css'
import { tokenInfo } from '../../models/db'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-col containers">
        <div className="copyright">
          <span className="copyRight">&copy; {new Date().getFullYear()} {tokenInfo.name}.</span>
        </div>

        <div className="">
          <a href="https://twitter.com/constitutionERC" target="_blank" rel="noopener noreferrer">
            <img src={tokenInfo.twitter} alt="twitter" width={30} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer