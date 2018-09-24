# react-image-overlay

> Overlay images.

[![NPM](https://img.shields.io/npm/v/react-image-overlay.svg)](https://www.npmjs.com/package/react-image-overlay) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

With `npm`:

```bash
npm install --save react-image-overlay
```

With `yarn`:

```bash
yarn add react-image-overlay
```

### To do
* styling props for image and overlay

## Usage

```jsx
import React, { Component } from 'react'
import Overlay from 'react-image-overlay'

class Overlay extends Component {
  render () {
    return (
      <Overlay 
          url='https://placeimg.com/250/250/any' // required
          overlayUrl='https://placeimg.com/50/50/any' // required
          imageHeight={100}
          position={'bottomRight'}
          overlayWidth={50}
          overlayHeight={50}
          overlayPadding={10}
          watermark={false}
      />
    )
  }
}
```

### Prop-types

| prop  |  type |   |
|---|---|---|
| url  | string  | required  |
|  overlayUrl |  string | required  |
| imageHeight  | number  |  optional |
| imageWidth  | number  |  optional |
| overlayHeight  | number  |  optional |
| overlayWidth  | number  |  optional |
| position  | number  |  possible values: 'bottomLeft', 'center', 'bottomRight', 'topLeft', 'topRight' |
| overlayPadding  | number  |  the amount of padding for the overlay, calculated from the edge of the main image |
| watermark  | true/false  |  use this option if you want the overlay to be applied as a watermark |

**Important Note:** Enabling watermark renders the image and overlay to a single canvas, preventing site users from downloading images separately.

## License

MIT © [saintograph](https://github.com/saintograph)
