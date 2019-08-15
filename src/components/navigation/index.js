import React from 'react';
import MainNavigation from './mainNavigation';
import BlackNavigation from './blackNavigation';
import SmallTopNav from './smallTopNav';

export default class Navigation extends React.Component {
    render() {
        return (
            <nav className='navigation grid'>
                <MainNavigation />
                <BlackNavigation />
                <SmallTopNav />
            </nav> 
        )
    }
}