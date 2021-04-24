import React, { Component } from 'react';

class MasInfo extends Component{
    constructor() {
        super()
        this.title = React.createRef()
        this.changeColor = this.changeColor.bind( this )
        this.state = {
            error: null,
            isLoaded: false,
            items: []
          };
    }
    changeColor() {
        console.log(this.title)
        // this.title.current.style.display = 'block'
        if(this.title.current.style.display === "none"){
            this.title.current.style.display = "block";
        } else{
            this.title.current.style.display = "none";
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
                 <button className="boton" onClick = { this.changeColor }>Más información</button>
                 {items.map(item=> (
                    <div ref = { this.title } style={{display: 'none'}}>
                        <li>{item.location.street.name}, {item.location.street.number}</li>
                        <li>{item.location.city}, {item.location.state}</li>
                        <li>{item.location.postcode} {item.location.country}</li>
                        <li>Registrado: {item.registered.date.substring(0,10)}</li>
                        <li>Contacto: {item.phone}</li>
                    </div>
                 ))}
            </div>
        );
    }
    }

export default MasInfo;