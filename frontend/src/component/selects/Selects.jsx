import React from 'react'
import './SelectsStyles.css'

import BoraBora from '../../images/borabora.jpg'
import BoraBora2 from '../../images/borabora2.jpg'
import Maldives from '../../images/maldives.jpg'
import Maldives2 from '../../images/maldives2.jpg'
import Maldives3 from '../../images/maldives3.jpg'
import KeyWest from '../../images/keywest.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='Top 6' className='selects'>
            <h1 className="heading">Top 6 Island & Resorts Of The World</h1>
            <div className='container'>

                <SelectsImg bgImg={BoraBora} text='Bora Bora' />
                <SelectsImg bgImg={BoraBora2} text='Emerald Bay' />
                <SelectsImg bgImg={Maldives} text='Lakshadweep' />
                <SelectsImg bgImg={Maldives2} text='Grenada' />
                <SelectsImg bgImg={Maldives3} text='Barbados' />
                <SelectsImg bgImg={KeyWest} text='Key West' />
            </div>

        </div>
    )
}

export default Selects
