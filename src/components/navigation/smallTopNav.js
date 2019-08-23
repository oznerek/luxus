import React from 'react';

export default class SmallTopNav extends React.Component {
    render() {
        return(
            <nav className="smallTopNav"> 
                    <ul className="smallList">
                        <li className="smallList-name smallList__active">Cennik</li>
                        <li className="smallList-name">Finansowanie</li>
                        <li className="smallList-name">Jazda testowa</li>
                        <li className="smallList-name">Znajdz dilera</li>
                    </ul>
            </nav>
        )
    }
}