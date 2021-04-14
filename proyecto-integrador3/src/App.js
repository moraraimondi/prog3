import Header from './components/Header';

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
