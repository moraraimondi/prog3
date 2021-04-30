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
            items: [],
            sizeGrande: '30%',
            sizeNuevo: '20%',
            size: '30%',
        }}
        
        componentDidMount(){
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
        
        
         cambiarVistas(){
           let botonSeleccionado = document.querySelector("button.cambiar-vistas").value;
           console.log(botonSeleccionado);

            if(this.state.size === this.state.sizeGrande){
              //compara el tamaño actual con el tamaño original
              console.log(this.state.sizeGrande);
              this.setState({size: this.state.sizeNuevo})
            } else {
              this.setState({size: this.state.sizeGrande})
              console.log(this.state.size);
            }
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

        <div className="super-container">

            <div className="cambiar-vistas-container">  
                <button className="boton cambiar-vistas" value="2" onClick={this.cambiarVistas.bind(this)}>Ver de a 4</button>
              </div>

          
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
                    
                      <Tarjetas 
                      size={this.state.size}
                      nombre={item.name.first} apellido={item.name.last} mail={item.email} 
                      fecha={item.dob.date} edad={item.dob.age} foto={item.picture.large} 
                      id={item.login.uuid} borrarTarjeta= {this.borrarTarjeta.bind(this)}/>

                      ))}
                  </div>
              <div/>
          </div>
          </div>

        </div>
      )
      }
  }}

  export default Contenedor;