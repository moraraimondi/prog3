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
          
          <div className="main-container">
              <div className="container">
                {/* Estas son las tarjetas */}
                    <Contenedor/>
              </div>

              <footer>
                  <Footer/>
              </footer>
          </div>
        </body>
      )
    }
  }
}
  

export default App;
