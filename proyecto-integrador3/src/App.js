import Header from './components/Header';
import Footer from './components/Footer';
import Contenedor from './components/Contenedor';
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

  // componentDidMount() {
  //   fetch("https://randomuser.me/api/?results=12")  
  //   .then(res => 
  //     res.json())
  //   .then(
  //     (data) => {
  //       console.log(data);

  //         this.setState({
  //           isLoaded: true,
  //           items: data.results,
  //         });
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  // }

  // borrarTarjeta(idItem){
  //   console.log("Item a eliminar:" + idItem);
  //   let resultado = this.state.items.filter((item)=>{
  //     return item.login.uuid!== idItem
  //   })
  //   this.setState({items: resultado})
  // }

render(){

  const {error, isLoaded, items} = this.state;

  if(error){
    return <div> Error: {error.message}</div>;
  } else {
    return (

      <body>
      <header className="header">
        <Header/>
      </header>

      

      <div className="container">

        {/* Estas son las tarjetas */}

            <Contenedor/>

      </div>

      <footer>
          <Footer/>
      </footer>
    </body>
    )
  }
}
}
  

export default App;
