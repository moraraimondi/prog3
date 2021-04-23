import React, {Component} from "react";
import Tarjetas from './Tarjetas';
import Filtros from './Filtros';

class Contenedor extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          numero: "",
          items: []
        };
      }

      componentDidMount() {
        fetch("https://randomuser.me/api/?results=12")  
        .then(res => 
          res.json())
        .then(
          (data) => {
            console.log(data);
    
              this.setState({
                isLoaded: true,
                items: data.results,
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      } 

      borrarTarjeta(idItem){
        console.log("Item a eliminar:" + idItem);
        let resultado = this.state.items.filter((item)=>{
          return item.login.uuid!== idItem
        })
        this.setState({items: resultado})
      }

      abrirFormulario(){
        var x = document.getElementById("formulario");
         if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
          console.log(x.style.display)
      }

      agregarTarjetas(){
        fetch("https://randomuser.me/api/?results="+ this.state.numero )
      .then(resource => resource.json())
      .then(data => {
        console.log(data)
        let add = this.state.items.concat(data.results);
        this.setState({items: add});
    })
      }

    render(){
        const {error, isLoaded, items} = this.state;

  if(error){
    return <div> Error: {error.message}</div>;
  } else {
    return (

        <div className="container">
            <div className="left-section">
                <div className="formulario-filtros">          
                    <Filtros/>
                    <button onClick={this.abrirFormulario.bind(this)}>Agregar tarjetas</button>
                    <div id="formulario">
                        
                            ¿Cuántas tarjetas queres agregar?
                            <input type="number" onChange={(event) => this.setState({numero: event.target.value})}></input>
                            <button onClick={this.agregarTarjetas.bind(this)}>AGREGAR</button>
                        
                    </div>
                </div>
            </div>

            
            <div className="right-section">

                {/* Contenedor de tarjetas */}
                <div className="tarjetas-container">
                    {items.map(item=> (
                    
                    <Tarjetas nombre={item.name.first} apellido={item.name.last} mail={item.email} 
                    fecha={item.dob.date} edad={item.dob.age} foto={item.picture.large} 
                    id={item.login.uuid} borrarTarjeta= {this.borrarTarjeta.bind(this)}/>

                    ))}
                </div>
            <div/>
        </div>
        </div>
    )
    }
}}

export default Contenedor;