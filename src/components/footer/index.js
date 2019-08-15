import React from 'react';
import FooterList from './footerLinkList';
import TestDrive from './testDrive';

const Footer =() => {
    return (
        <footer className='footer'> 
            <TestDrive />
            <FooterList />

            <div className='lexus'>&copy; This is the fake website of Lexus, created for learning. Author Michal Oznerek</div>
        </footer>
    )
}

export default Footer;