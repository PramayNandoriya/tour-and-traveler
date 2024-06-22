import React from 'react'
import './HeroStyles.css'

import Video from "../../images/maldivesVideo.mp4"

function TopCenter() {
    return (
        <>
            <div className='hero'>
                <video autoPlay loop muted id='video'>
                    <source src={Video} type='video/mp4' />
                </video>
                <div className="overlay"></div>
                <div className="content">
                    <h1>WelCome..!</h1>
                    <h2>Top 10 Locations are available On Our Website</h2>
                </div>
            </div>
        </>
    )
}

export default TopCenter
