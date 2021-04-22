import React, {Component} from "react";

class AgregarTarjetas extends Component {
    constructor(props) {
         super(props);
         this.state = {
           error: null,
          isLoaded: false,
           items: []
         };
       };

    render(){
        addTarjeta(){
            fetch("https://randomuser.me/api/")
             .then(resource => resource.json())
             .then(data => {
                 console.log(data)
                 this.state.items.push(data.results[0]);
                 this.setState({items: this.state.items});
             })
         }
    }
}

export default AgregarTarjetas;