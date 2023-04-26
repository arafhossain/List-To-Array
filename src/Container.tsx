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
          Left
        </div>
        <div className='right-output'>
          Right
        </div>
      </div>
    )
  }
}