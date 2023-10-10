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
          duration: short, normal, long
          width
          font size
        */}
        <AnimatedToast 
         message="Input Data is incorrect" ref={this.childRef} // This props are required and other props are optional
         type="info" 
         icon={blink_icon} backgroundColor="magenta" textColor='black' borderRadius="25px"/>

        <button onClick={this.showToast.bind(this)}>Show Toast</button>
      </div>
    )
  }
}