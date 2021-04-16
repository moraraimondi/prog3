import Header from './components/Header';
import Tarjetas from './components/Tarjetas';
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

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=12")  
    .then(res => 
      res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            items: data.results
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
  return (
    <body>
      <header className="header">
        <Header/>
      </header>

      <div className="container">

        <div className="left-section">
          <div className="formulario-filtros">
            Hola
          </div>
        </div>

        <div className="right-section">
          <div className="tarjetas-container">
            {items.map(item=> (
              <Tarjetas nombre={item.name.first}/>
            ))}
            
          </div>

          <div className="controller">
            Aca van los botones
          </div>
        </div>

      </div>

      <footer>

      </footer>
    </body>
  );
}
}
  

export default App;
