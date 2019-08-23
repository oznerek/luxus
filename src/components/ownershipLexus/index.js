import React from 'react';
import OwnershipLexus from './ownershipLexus';
import OwnershipCardsList from './ownershipCardsList';

const Ownership = () => {
    return (
        <section className='ownership'> 
        <OwnershipLexus />
        <OwnershipCardsList />
         </section>
    )
}

export default Ownership;