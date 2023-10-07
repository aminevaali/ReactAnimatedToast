import React, { Component } from 'react'
import AnimatedToast from './Components/AnimatedToast/AnimatedToast';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }

  showToast() {
    this.childRef.current.launch_toast("toast with ref");
  }

  componentDidMount() {
    this.showToast();
  }

  render() {
    return (
      <div className="App">
        {/* 
          TODO: indeed props for AnimatedToast
          type: success, failure, warning, info
          icon
          background-color
          color (text color)
          border-radius
          duration: short, normal, long
          width

        */}
        <AnimatedToast type="success" imgAlt="testAlt" message="Input Data is incorrect" ref={this.childRef} />
        <button onClick={this.showToast.bind(this)}>Show Toast</button>
      </div>
    )
  }
}