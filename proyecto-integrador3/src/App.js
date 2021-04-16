import Header from './components/Header';

// componentDidMount() {
//   fetch("https://randomuser.me/api/?inc=name,login&results=12")
//   .then(resource => resource.json())
//   .then(data => {
//       this.setState({items: data.results});
//       console.log(this.state.items);
//   })
// }; 

function App() {
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
            Aca van las tarjetas
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

export default App;
