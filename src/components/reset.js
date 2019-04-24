import React, { Component } from 'react';

class Reset extends Component {
    onReset = () =>{
this.props.ReciveOnReset(true);
    }
    render() {
        return (
            <div>
                <hr/>
                <button onClick={this.onReset}> Reset </button>                
            </div>
        );
    }
}

export default Reset;