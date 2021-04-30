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
            itemsOriginal:[],
            items: [],
            sizeGrande: '30%',
            size: '30%',
            sizeCuatro: '20%',
            sizeTres: '25%',
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
                  itemsOriginal: data.results,
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

        ordenarAscendente (){
          this.state.items.sort((a,b) => a.name.first.localeCompare(b.name.first))
          this.setState({
            items: this.state.items.sort(function(a,b) {
              return a.name.first > b.name.first
            })
          })
        }

        ordenarDescendente (){
          this.state.items.sort((a,b) => b.name.first.localeCompare(a.name.first))
          this.setState({
            items: this.state.items.sort(function (a,b) {
              return b.name.first > a.name.first
            })
          })
        }
        
        
         cuatroTarjetas(){
           let botonSeleccionado = document.querySelector("button.cambiar-vistas").value;
           console.log(botonSeleccionado);

            if(this.state.size === this.state.sizeGrande){
              //compara el tamaño actual con el tamaño original
              console.log(this.state.sizeGrande);
              this.setState({size: this.state.sizeCuatro})
            } else {
              this.setState({size: this.state.sizeGrande})
              console.log(this.state.size);
            }
         }

         tresTarjetas(){
          let botonSeleccionado = document.querySelector("button.cambiar-vistas").value;
          console.log(botonSeleccionado);

           if(this.state.size === this.state.sizeGrande){
             //compara el tamaño actual con el tamaño original
             console.log(this.state.sizeGrande);
             this.setState({size: this.state.sizeTres})
           } else {
             this.setState({size: this.state.sizeGrande})
             console.log(this.state.size);
           }
         }

        restablecerVista(){
          if(this.state.size === this.state.sizeGrande){
            //compara el tamaño actual con el tamaño original
            console.log(this.state.sizeGrande);
            this.setState({size: this.state.sizeGrande})
          } else {
            this.setState({size: this.state.sizeGrande})
            console.log(this.state.size);
          }         
        }

        restablecerTarjetas(){
          this.setState({items: this.state.itemsOriginal})
        }


        filtrarTarjetas(){
          let dataAfiltrar = document.querySelector(".inputDataFiltro").value
          let campoAfiltrar = document.querySelector(".selectDataFiltro").value

          console.log(dataAfiltrar)
          console.log(campoAfiltrar)


          if(dataAfiltrar != ""){
            if (campoAfiltrar === "Edad"){
              let resultado = this.state.items.filter( (item) => {
                return item.dob.age == dataAfiltrar 
              }) 
              this.setState({items: resultado})
            } else if (campoAfiltrar === "Nombre"){
              let dataAfiltrarMayuscula = dataAfiltrar.toUpperCase()

              let resultado = this.state.items.filter( (item) => {
                let dataMayuscula = item.name.first.toUpperCase()
                return dataMayuscula.includes(dataAfiltrarMayuscula)
              })
              this.setState({items: resultado})
            } else if (campoAfiltrar === "Sexo"){
              let dataSexo = dataAfiltrar.replace("hombre","male").replace("mujer","female")

              let resultado = this.state.items.filter( (item) => {
                
                return item.gender === dataSexo
              })  
              this.setState({items:resultado})
            } else if (campoAfiltrar === "Apellido"){
              let dataAfiltrarMayuscula = dataAfiltrar.toUpperCase()

              let resultado = this.state.items.filter( (item) => {
                let dataMayuscula = item.name.last.toUpperCase()
                return dataMayuscula.includes(dataAfiltrarMayuscula)
              })
              this.setState({items: resultado})
            }
          } else {
            this.setState({items: this.state.itemsOriginal})
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

          <div className="panel-superior-div">

            <div className="panel-superior">
              <div className="vistas-container">
                <div className="vistas-title-div">
                  <h3 className="vistas-title">Vista Tarjetas</h3>
                </div>
                <button className="boton-superior cambiar-vistas" value="3" onClick={this.restablecerVista.bind(this)}>2 por fila</button>
                <button className="boton-superior cambiar-vistas" value="3" onClick={this.tresTarjetas.bind(this)}>3 por fila</button>
                <button className="boton-superior cambiar-vistas" value="4" onClick={this.cuatroTarjetas.bind(this)}>4 por fila</button>
              </div>

              <div className="ordenar-container">
                <div className="vistas-title-div">
                  <h3 className="vistas-title">Ordenar Nombres</h3>
                </div>
                <button className="boton-ordenar" onClick={this.ordenarAscendente.bind(this)}><i className="icono fas fa-sort-alpha-down"></i></button>
                <button className="boton-ordenar" onClick={this.ordenarDescendente.bind(this)}><i className="icono fas fa-sort-alpha-up"></i></button>
              </div>
            </div>

          </div>

          <div className="container">

              {/*SECCIÓN IZQUIERDA*/}

              <div className="left-section">

                <div className="opciones">

                  {/* FILTROS */}

                  <div className="filtros-div">

                    <h2 className="filtros-title">Filtros</h2>

                    <label style={{fontWeight:"600", color:"424242"}}>Filtrar por</label>
                    <div className="div-campos-filtro">
                      <select className="selectDataFiltro" name="selectDataFiltro" id="selectDataFiltro">
                        <option>Nombre</option>
                        <option>Apellido</option>
                        <option>Edad</option>
                        <option>Sexo</option>
                      </select>

                      <input className="inputDataFiltro input" name="filtroData" id="inputDataFiltro"/>
                    </div>
                    
                    <div className="div-botones">
                      <button className="boton" onClick={this.filtrarTarjetas.bind(this)}>Filtrar</button>
                      <button className="boton-secundario boton" onClick={this.restablecerTarjetas.bind(this)}>Reset</button>
                    
                    </div>

                  </div>

                  {/* AGREGAR TARJETAS */}

                  <div className="formulario-agregar">
                      <button className="boton boton-agregar2" onClick={this.abrirFormulario.bind(this)}>Agregar tarjetas</button>
                      <div id="formulario" style={{display:"none"}}>
                        <div className="agregar-detalle">
                          <p className="detalle-p">¿Cuántas tarjetas queres agregar?</p>
                          <input className="input-agregar" type="number" onChange={(event) => this.setState({numero: event.target.value})}></input>
                        </div>
                        <button className="boton boton-agregar" onClick={this.agregarTarjetas.bind(this)}> Agregar </button>  
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