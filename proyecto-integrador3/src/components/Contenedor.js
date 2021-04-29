  import React, {Component} from "react";
  import Tarjetas from './Tarjetas';
  // import Filtros from './Filtros';

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
        
        filtrarTarjetas(){
          let dataAfiltrar = document.getElementById("inputDataFiltro").value
          let campoAfiltrar = document.getElementById("selectDataFiltro").value

          console.log(dataAfiltrar)
          console.log(campoAfiltrar)


          if (campoAfiltrar === "Edad"){
            let resultado = this.state.items.filter( (item) => {
              return item.dob.age == dataAfiltrar 
            }) 
            this.setState({items: resultado})
          } else if (campoAfiltrar === "Nombre"){
            let resultado = this.state.items.filter( (item) => {
              return item.name.first.includes(dataAfiltrar)
            })
            this.setState({items: resultado})
          } else if (campoAfiltrar === "Sexo"){
            let resultado = this.state.items.filter( (item) => {
              return item.gender === dataAfiltrar
            })  
            this.setState({items:resultado})
          } else if (campoAfiltrar === "Apellido"){
            let resultado = this.state.items.filter( (item) => {
              return item.name.last.includes(dataAfiltrar)
            })
            this.setState({items: resultado})
          }
        }


        borrarTarjeta(idItem){
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

              {/*SECCIÓN IZQUIERDA*/}

              <div className="left-section">

                <div className="opciones">

                  {/* FILTROS */}

                  <div className="filtros-div">

                    <h2 className="filtros-title">Filtros</h2>
                    
                    <label style={{fontWeight:"600", color:"424242"}}>Filtrar por</label>
                    <select id="selectDataFiltro">
                      <option>Nombre</option>
                      <option>Apellido</option>
                      <option>Edad</option>
                      <option>Sexo</option>
                    </select>

                    <input className="inputDataFiltro" name="filtroData" id="inputDataFiltro"/>

                    <div className="div-botones">
                      <button className="boton" onClick={this.filtrarTarjetas.bind(this)}>Filtrar</button>
                      <button className="boton-secundario boton"onClick={this.componentDidMount.bind(this)}>Reset</button>
                    </div>

                  </div>

                  {/* AGREGAR TARJETAS */}

                  <div className="formulario-agregar">
                      <button className="boton boton-agregar" onClick={this.abrirFormulario.bind(this)}>Agregar tarjetas</button>
                      <div id="formulario" style={{display:"none"}}>
                        <p>¿Cuántas tarjetas queres agregar?</p>
                        <input type="number" onChange={(event) => this.setState({numero: event.target.value})}></input>
                        <button className="boton" onClick={this.agregarTarjetas.bind(this)}> Agregar </button>  
                      </div>
                  </div>
                </div>
                
              </div>

              {/*SECCIÓN DERECHA */}

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