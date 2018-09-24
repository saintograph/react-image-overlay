# react-image-overlay
### WIP

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
| position  | number  |  possible values: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight' |

## License

MIT © [saintograph](https://github.com/saintograph)
