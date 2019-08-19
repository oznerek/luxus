import React from 'react';
import SpecialOffer from './specialOffer';
import StandardOffer from './standardOffer';

const Offer = () => {
    return(
        <div className='offer'>
            <SpecialOffer />
            <StandardOffer />
        </div>
    )
}

export default Offer;