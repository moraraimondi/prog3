import React, {Component} from "react";

class TarjetasDetalle extends Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      };
      render(){
          return(
              <div>Detalles modal</div>
          )
      }
}
export default TarjetasDetalle