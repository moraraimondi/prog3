import Header from './components/Header';
import Tarjetas from './components/Tarjetas';
import Footer from './components/Footer';
import React, {Component} from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  // Este es el Fetch que me trae los resultados de las tarjetas que se muestran en el inicio

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

render(){

  // let fechaAcortada = items.dob.age;
  // console.log(fechaAcortada)

  const {error, isLoaded, items} = this.state;

  // const fecha = items.dob.age;

  // const fechaCorta = fecha.substring(0,10)

  if(error){
    return <div> Error: {error.message}</div>;
  } else {
    return (

      <body>
      <header className="header">
        <Header/>
      </header>

      <div className="container">

        <div className="left-section">
          <div className="formulario-filtros">
          {/* Acá va el formulario para filtrar */}
        </div>
        </div>

        {/* Estas son las tarjetas */}
        <div className="right-section">

          {/* Contenedor de tarjetas */}
          <div className="tarjetas-container">
            {items.map(item=> (
              
              <Tarjetas nombre={item.name.first} apellido={item.name.last} mail={item.email} fecha={item.dob.date} edad={item.dob.age} foto={item.picture.large}/>
            ))}
          </div>

          <div className="controller">
            Aca van los botones
          </div>
        </div>

      </div>

      <footer>
          {/* <Footer/> */}
      </footer>
    </body>
    )
  }
}
}
  

export default App;
