import React, { Component, Fragment } from 'react'
import Overlay from 'react-image-overlay'

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <Overlay
          url='https://placeimg.com/850/750/any'
          imageHeight={100}
          position={'bottomRight'}
          overlayWidth={50}
          overlayHeight={50}
        />
      </Fragment>
    )
  }
}
