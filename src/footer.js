import React from 'react'
import Dice from './Img/oddience-white-logo.svg'
import SocialFollow from './social'
function Footer() {
    return (
        <div className='l-1'>
            <span className='die'>
                <p className='ddice'>
                    <img className='dicebg' src={Dice}/>
                </p>
                <p>
                    support@oddience.co
                </p>
                <p>
                    Pricing
                </p>
                <p>
                    FAQs
                </p>
                <p>
                    Privacy Policy
                </p>
                <p>
                    Terms Of Use
                </p>
            </span>
            <span>
                <SocialFollow/>
            </span>
            <p>
                Oddience,2023. ALl Rights Reserved.
            </p>
        </div>
    )
}

export default Footer
