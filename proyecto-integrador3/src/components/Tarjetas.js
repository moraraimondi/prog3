import React, {Component} from "react";


class Tarjetas extends Component {

    constructor(props) {
        super(props);
        this.masInfo = this.masInfo.bind(this)
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      };
      
      masInfo(e){
          //this.detalle.current.style.display= 'block'
          e.preventDefault();
          var x = document.getElementById("info");
          if (x.style.display === "none") {
              x.style.display = "block";
            } else {
                x.style.display = "none";
            }
      }

    render() {

        return(
            <div className="tarjetas" style={{backgroundColor: this.state.color}}
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
                    {/* style={{backgroundImage: "url(" + this.props.foto +")"}} */}
                            <img className="fotoPerfil" src= {this.props.foto}/>
                        </div>
                        <div className="datos-perfil">
                                <li className="nombre-perfil">{this.props.nombre} {this.props.apellido}</li>
                                <li className="edad-perfil"> {this.props.edad} Años, <span style={{fontWeight: 200}}>{this.props.fecha.substring(0,10)}</span></li>
                                <li className="mail-perfil">{this.props.mail}</li>
                                <p className="p-detalleTarjeta">Hace click en la tarjeta para más detalles </p>
                                {/* <li><a href="a">Más info</a></li> */}
                                <button className="masInfo" onClick={this.masInfo}>Más información</button>
                        </div>
                    </a>

                    <div className="detallesInfo"  id="info" ref={this.detalle}>
                        <li>{this.props.calle}, {this.props.numero}</li>
                        <li>{this.props.ciudad}, {this.props.estado}</li>
                        <li>{this.props.cp} {this.props.pais}</li>
                        <li>Registrado: {this.props.registro.substring(0,10)}</li>
                        <li>Contacto: {this.props.telefono}</li>
                    </div>
               </ul>
           </div> 
        )

    }
};

export default Tarjetas;

