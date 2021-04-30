import React, { Component } from 'react';
import HeaderItem from './HeaderItem'

class Header extends Component {

    render() {
        return (
            <div className="header-div">

                <div className="logo-div">
                    <img src="/img/logo.png" alt="logotipo" className="logo"></img>
                </div>

                <div className="section-div">
                    <ul className="section-list">
                        <HeaderItem seccion="Inicio"/>
                    </ul>
                </div>

            </div>

        )
    }
}

export default Header;