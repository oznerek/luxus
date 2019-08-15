import React from 'react';

export default class TestDrive extends React.Component {
    render() {
        return (
            <div className="testDrive">
                <div className="testDrive__header">Jazda testowa</div> 
                <button className="testDrive__btn">zapisz sie <span className='testDrive__icon'></span></button>
            </div>
        )
    }
}