// import React, {Component} from "react";

// class AgregarTarjetas extends Component {

//   addTarjeta(e){
//     e.preventDefault();
//     var x = document.getElementById("formulario");
//     if(x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   handleChange(event){
//     this.setState({value: event.target.value});
//   }
  
//   handleSubmit(event){
//     alert('Agregaste:' + this.state.value);
//     event.preventDefault();
//   }

//   render(){
//     const {error, isloaded, items} = this.state;
//     if(error){
//       return <div>Hubo un error: {error.message}</div>;
//     }
//     else if (!isloaded) {
//       return <div>Cargando...</div>;
//     }
//     else {
//       return (
//         <React.Fragment>

//         <div>

//         <button onclick={this.addTarjeta.bind(this)}>Agregar tarjetas</button>

//         <form id="formulario">
//           <label>¿Cuántas tarjetas queres agregar?</label>
//           <input type="number"></input>
//         </form>

//         </div>

//         </React.Fragment>

//       )
        
//     }
//   }
// };

// export default AgregarTarjetas;