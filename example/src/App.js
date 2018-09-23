import React, { Component } from 'react'

import Overlay from 'react-image-overlay'

export default class App extends Component {
  render () {
    return (
      <div>
        <Overlay url='https://placeimg.com/640/480/any' />
      </div>
    )
  }
}
