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
                   <img src= {this.props.foto}/>
                   <li>{this.props.nombre} {this.props.apellido}</li>
                   <li>{this.props.mail}</li>
                   <li>{this.props.fecha} ({this.props.edad})</li>
                   <li><a href="hola">Contacto</a></li>
               </ul>
               <TarjetasDetalle/>
           </div> 
        )

    }
};

export default Tarjetas;
