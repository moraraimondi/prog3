import React, {Component} from "react";
import TarjetasDetalle from "./TarjetasDetalle";

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
            <div className="tarjetas" style={{backgroundColor: this.state.color}}
            // onMouseOver = {() => this.CambiarColor("rgb(253, 218, 178)")}
            // onMouseOut={this.CambiarColor}
            >  
            
               <ul className="personajes">
                   <div className="div-fotoPerfil"> 
                   {/* style={{backgroundImage: "url(" + this.props.foto +")"}} */}
                        <img className="fotoPerfil" src= {this.props.foto}/>
                   </div>
                   <div className="datos-perfil">
                        <li className="nombre-perfil">{this.props.nombre} {this.props.apellido}</li>
                        <li> {this.props.edad} Años, <span style={{fontWeight: 200}}>{this.props.fecha.substring(0,10)}</span></li>
                        <li className="mail-perfil">{this.props.mail}</li>
                        <div className="div-buttons">
                            <button className="button-info">
                                Más info
                            </button>
                            <button className="button-borrar">
                                Borrar
                            </button>
                        </div>
                        {/* <li><a href="a">Más info</a></li> */}
                   </div>
               </ul>

               <TarjetasDetalle/>

           </div> 
        )

    }
};

export default Tarjetas;

