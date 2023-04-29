import React, { Component } from 'react'
import "./Container.css";

type Props = {}

type IContainer = {
  input: string;
  convertedString: string
}

export default class Container extends Component<Props, IContainer> {
  constructor(props:Props){
    super(props)
    this.state = {
      input: '',
      convertedString: ''
    }
  }
  convert(){
    const { input } = this.state;
    if(input.trim() !== ''){
      const split = JSON.stringify(input.split("\n"));
      this.setState({...this.state, convertedString: split})
    }
  }
  render() {
    return (
      <div className='container'>
        <div className='left-input'>
          <div className='label-container'>
            <label>Paste list here</label>
          </div>
          <div className='input-container'>
            <textarea
              className='text-input'
              value={this.state.input}
              onChange={(e)=>{
                 this.setState({input:e.target.value})
              }}
            >
            </textarea>
            <div>
              <button onClick={()=>{this.convert()}}>Convert</button>
            </div>
          </div>
        </div>
        <div className='right-output'>
          <div className='label-container'>
            <label>Array output</label>
          </div>
          <div>
              <textarea 
                className='text-output'
                readOnly={true}
                value={this.state.convertedString}
              ></textarea>
          </div>
        </div>
      </div>
    )
  }
}