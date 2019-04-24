import React, { Component } from 'react';

class Result extends Component {
    render() {
        return (
            <div className="result">
                <p style={{color:this.props.color, fontSize:this.props.fontsize}}> Color and Size selected</p>
            </div>
        );
    }
}

export default Result;