import React, { Component } from 'react';

class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color:["red", "green", "blue"]
        };
    }
    setStyle(co_lor){
       return { background: co_lor}
    }
    PassColor=(co_lor)=>{
        this.props.ReciveColor(co_lor);
    }
    render() {
        var Elm=this.state.color.map((co_lor, index) => {
            return (
                <span
                    key={index}
                    style={this.setStyle(co_lor)}
                    className ={this.props.color === co_lor ? "active" : "" }
                    onClick ={()=>this.PassColor(co_lor)}
                >                   
                </span>
            );
            
        });
        return (
            <div className="color">
               <header>
                   <h2> Select Color you Want </h2>
                </header>
                <div className="span">
                    {Elm}
                </div>

            </div>
        );
    }
}

export default Color;