import React, { Component, Fragment } from 'react'
import Overlay from 'react-image-overlay'

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <Overlay
          url='https://placeimg.com/550/550/any'
          overlayUrl='https://placeimg.com/150/150/any'
          imageHeight={550}
          imageWidth={550}
          position={'center'}
          overlayWidth={150}
          overlayHeight={150}
          watermark={true}
          overlayPadding={10}
        />
      </Fragment>
    )
  }
}
