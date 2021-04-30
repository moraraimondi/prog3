import React, { Component } from 'react';

class MasInfo extends Component{
    constructor() {
        super()
        this.div = React.createRef()
        this.masInfo = this.masInfo.bind( this )
        this.state = {
            error: null,
            isLoaded: false,
            items: []
          };
    }
    masInfo() {
        console.log(this.div)
        // this.div.current.style.display = 'block'
        if(this.div.current.style.display === "none"){
            this.div.current.style.display = "block";
        } else{
            this.div.current.style.display = "none";
        }
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
    render() {
        const {error, isLoaded, items} = this.state;
        return (
            <div className="App">
                 <button className="boton" onClick = { this.masInfo }>Más información</button>
                 {items.map(item=> (
                    <div ref = { this.div } style={{display: 'none'}}>
                      <ul className="mas-info">
                        <li className='detalle'> <strong>Contacto: </strong>{item.phone}</li>
                        <li className='detalle'> <strong>Ciudad: </strong>{item.location.city}, {item.location.state}</li>
                        <li className='detalle'> <strong>Codigo Postal: </strong>{item.location.postcode}</li>
                        <li className='detalle'> <strong>País:  </strong>{item.location.country}</li>
                        <li className='detalle'> <strong>Registrado: </strong>{item.registered.date.substring(0,10)}</li>
                        </ul>
                    </div>
                 ))}
            </div>
        );
    }
    }

export default MasInfo;