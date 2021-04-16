import React, {Component} from "react";

class Tarjetas extends Component {
     constructor(){
         super();
         this.state = {
             // color: this.props.color
         }
     }

    //  CambiarColor = (nuevoColor) => {
    //      console.log(nuevoColor);
    //     if(this.state.color == this.state.colorOriginal)
    //         this.setState({color : nuevoColor});
    //     else 
    //         this.setState({ color: this.state.colorOriginal})
    //  };


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
