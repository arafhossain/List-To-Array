import React, { Component } from 'react'
import "./Container.css";

type Props = {}

type State = {}

export default class Container extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='container'>
        <div className='left-input'>
          <div className='label-container'>
            <label>Paste list here</label>
          </div>
          <div>
            <textarea
              // rows={10}
              className='text-input'
            >
            </textarea>
          </div>
        </div>
        <div className='right-output'>
          Right
        </div>
      </div>
    )
  }
}