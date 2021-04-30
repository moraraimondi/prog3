import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <div className="footer-div">
                        <h4 className="detalle-footer"> Sitio diseñado y desarrollado por <span style={{fontWeight:"bolder"}}>
                        Mora Raimondi, Lola Marotta y Tomás Giampaoletti
                        </span></h4>
                        <p className="detalle-footer" style={{color:"#424242"}}>
                            <strong>
                                Programación III - Digital House
                            </strong>
                        </p>
            </div>

        )
    }
}

export default Footer;