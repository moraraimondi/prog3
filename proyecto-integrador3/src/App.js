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

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=12")  
    .then(res => 
      res.json())
      .then(
        (data) => {
        console.log(data);

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

        <div className="left-section">
          <div className="formulario-filtros">
            Hola
          </div>
        </div>

        <div className="right-section">
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
          <Footer/>
      </footer>
    </body>
    )
  }
}
}
  

export default App;
