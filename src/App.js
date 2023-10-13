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
    const status = this.childRef.current.launch_toast("Toast launched successfully :)");
    console.log(status);
  }

  componentDidMount() {
    this.showToast();
  }

  render() {
    return (
      <div className="App">
        {/* 
          TODO: indeed props for AnimatedToast
          toast icon margin left
          adding queue to the component to handle conflicts while showing toasts
          icon tint
          width
        */}
        <AnimatedToast
          message="Input Data is incorrect" ref={this.childRef} // This props are required and other props are optional
          type="info"
          icon={blink_icon}
          backgroundColor="magenta"
          textColor='black'
          borderRadius="28px"
          fontSize='18px'
          duration='normal'
        />

        <button onClick={this.showToast.bind(this)}>Show Toast</button>
      </div>
    )
  }
}