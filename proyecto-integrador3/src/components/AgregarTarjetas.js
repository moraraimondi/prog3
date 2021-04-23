import React, {Component} from "react";

class AgregarTarjetas extends Component {

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

      addTarjetas() {
          
      }

};

export default AgregarTarjetas;