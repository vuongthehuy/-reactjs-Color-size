import React, { Component } from 'react';
class Size extends Component {
    

onSize=(value)=>{
    this.props.ReciveSize(value);
}

    
    
    render() {
        return (
            <div>
                <button onClick={()=>this.onSize(+2)}> Increase </button>
                <button onClick={()=>this.onSize(-2)}> Reduxtion </button>

            </div>
        );
    }
}

export default Size;