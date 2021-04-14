import React, { Component } from 'react';

class HeaderItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            stroke: this.props.stroke,
            color: this.props.color,
        }
    }

    CambiarColor = (nuevoColor) => {
        if(this.state.color == this.state.colorOriginal)
            this.setState({ color : nuevoColor});
        else 
            this.setState({ color: this.state.colorOriginal})
    }

    CambiarStroke = (nuevoStroke) => {
        if(this.state.stroke === this.state.strokeOriginal)
            this.setState({ stroke : nuevoStroke});
        else
            this.setState({ stroke : this.state.strokeOriginal})
    }

    render(){
        return(
            <li className="section">
                <a 
                href=""
                className="section-a"
                style={{
                    color: this.state.color,
                    fontWeight: this.state.stroke,
                }}
                onMouseOver={() => this.CambiarStroke('900')}
                onMouseOut={this.CambiarStroke}
                >{this.props.seccion}</a>
            </li>
        )
    }
}

export default HeaderItem;