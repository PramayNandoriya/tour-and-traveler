import React from 'react'
import './DestinationsStyles.css'


import BoraBora from "../../images/borabora.jpg"
import BoraBora2 from '../../images/borabora2.jpg'
import Maldives from '../../images/maldives.jpg'
import Maldives2 from "../../images/maldives2.jpg"
import KeyWest from "../../images/keywest.jpg"



function Destinations() {
    return (
        <div name='Resorts' className='destinations'>
            <div className="container">
                <h1>Images Of Our Resorts</h1>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={BoraBora} alt="/" />
                    <img src={BoraBora2} alt="loading" />
                    <img src={Maldives} alt="loading" />
                    <img src={Maldives2} alt="loading" />
                    <img src={KeyWest} alt="loading" />
                </div>
            </div>
        </div>
    )
}

export default Destinations
