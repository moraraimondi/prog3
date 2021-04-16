import React, {Component} from "react";

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
                   <li>{this.props.nombre}</li>
               </ul>
           </div> 
        )
    
           

    }
};

export default Tarjetas;
