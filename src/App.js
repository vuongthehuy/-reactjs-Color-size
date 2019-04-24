import React, { Component } from 'react';
import './App.css';
import Color from './components/color';
import Size from './components/size';
import Result from './components/result';
import Reset from './components/reset';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      size: 12
    }
  }
  SetColor=(co_lor)=>{
    this.setState({
      color : co_lor
    });
  }

  
  SetSize=(si_ze)=>{
    if(this.state.size>10 && this.state.size< 42 ){
    this.setState({
      size : this.state.size+si_ze
    });
  }
  else{
    alert("ko the chinh size");
  }
  }
  onReset =(value)=>{
    if(value){
      this.setState({
        color: "red",
        size: 12
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Color color={this.state.color} ReciveColor={(co_lor)=> this.SetColor(co_lor)} />
        <Result color={this.state.color} fontsize={this.state.size}/>
        <Size size={this.state.size} ReciveSize={(si_ze) => this.SetSize(si_ze)}/>
        <Reset ReciveOnReset ={(value) => this.onReset(value) }/>
      </div>
    );
  }
}

export default App;
