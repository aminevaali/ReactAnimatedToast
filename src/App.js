import React, { Component } from 'react'
import AnimatedToast from './Components/AnimatedToast/AnimatedToast';
import './App.css';
import blink_icon from './blink_icon.svg'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }

  showToast() {
    this.childRef.current.launch_toast("Toast launched successfully :)");
  }

  componentDidMount() {
    this.showToast();
  }

  render() {
    return (
      <div className="App">
        {/* 
          TODO: indeed props for AnimatedToast
          icon tint
          background-color
          color (text color)
          border-radius
          duration: short, normal, long
          width

        */}
        <AnimatedToast type="success" imgAlt="testAlt"
         message="Input Data is incorrect" ref={this.childRef}
         icon={blink_icon} backgroundColor='magenta'/>
        <button onClick={this.showToast.bind(this)}>Show Toast</button>
      </div>
    )
  }
}