import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-scroll'


function Footer() {
    return (
        <div className='footer'>
            <div className="top">
                <h3>WorldTour.in</h3>
                <div className="social">
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaTwitter className='icon' />
                    <FaPinterest className='icon' />
                    <FaYoutube className='icon' />
                </div>
            </div>

                <hr />
            <div className="bottom">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='Resorts' smooth={true} duration={500} ><li>Resorts</li></Link>
                <Link to='Top 6' smooth={true} duration={500} ><li>Top 6</li></Link>
                <Link to='Packages' smooth={true} duration={500} ><li>Packages</li></Link>
                <Link to='Hotels' smooth={true} duration={500} ><li>Hotels</li></Link>

            </div>
        </div>
    )
}

export default Footer
