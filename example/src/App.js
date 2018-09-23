import React, { Component, Fragment } from 'react'
import Overlay from 'react-image-overlay'

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <Overlay
          url='https://placeimg.com/250/250/any'
          overlayUrl='https://placeimg.com/50/50/any'
          imageHeight={100}
          position={'bottomRight'}
          overlayWidth={50}
          overlayHeight={50}
        />
      </Fragment>
    )
  }
}
