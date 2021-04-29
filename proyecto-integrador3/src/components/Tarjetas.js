import React, {Component} from "react";
import MasInfo from "./MasInfo";

class Tarjetas extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      };

    render() {

        return(
            <div className="tarjetas" style={{backgroundColor: this.state.color, width: this.props.size}}
            // onMouseOver = {() => this.CambiarColor("rgb(253, 218, 178)")}
            // onMouseOut={this.CambiarColor}
            >  
                <div className="div-deleteButton">
                    <button className="deleteButton" onClick= {this.props.borrarTarjeta.bind(this,this.props.id)}>
                        X
                    </button>
                </div>

               <ul className="personajes">
                    <a href="">
                        <div className="div-fotoPerfil"> 
                            <img className="fotoPerfil" src= {this.props.foto}/>
                        </div>
                        <div className="datos-perfil">
                                <li className="nombre-perfil">{this.props.nombre} {this.props.apellido}</li>
                                <li className="edad-perfil"> {this.props.edad} Años, <span style={{fontWeight: 200}}>{this.props.fecha.substring(0,10)}</span></li>
                                <li className="mail-perfil">{this.props.mail}</li>
                        </div>
                    </a>
               </ul>
               <MasInfo/>
           </div> 
        )

    }
};

export default Tarjetas;

