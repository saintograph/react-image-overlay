import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {
  container: {
    position: 'relative',
  },
  mainImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  overlayImage: {
    position: 'absolute',
    objectFit: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

class Overlay extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    overlayUrl: PropTypes.string.isRequired,
    imageHeight: PropTypes.number,
    imageWidth: PropTypes.number,
    overlayHeight: PropTypes.number,
    overlayWidth: PropTypes.number,
    position: PropTypes.string,
    canBeCopied: PropTypes.string,
  }

  static defaultProps = {
    imageHeight: 250,
    imageWidth: 250,
    overlayHeight: 30,
    overlayWidth: 30,
    position: null,
    canBeCopied: true,
  }

  overlayPosition() {
    const { position } = this.props;
    switch (position) {
      case 'topLeft':
        return {
          top: '10px',
          left: '10px',
        };
      case 'topRight':
        return {
          top: '10px',
          right: '10px',
        };
      case 'bottomLeft':
        return {
          bottom: '10px',
          left: '10px',
        };
      case 'center':
        return {
          right: 0,
          left: 0,
          top: 0,
          bottom: 0,
          margin: 'auto auto',
        };
      default:
        return {
          bottom: '10px',
          right: '10px',
        };
    }
  }

  render() {
    const {
      container,
      mainImage,
      overlayImage,
    } = style;
    const {
      url,
      imageHeight,
      imageWidth,
      overlayHeight,
      overlayWidth,
      position,
      overlayUrl,
      canBeCopied,
    } = this.props;

    return (
      <div
        style={{
          ...container,
          height: imageHeight,
          width: imageWidth,
        }}
      >
        <img
          src={url}
          alt="main"
          style={{
            ...mainImage,
            backgroundImage: `url("${url}")`,
          }}
        />
        <img
          src={overlayUrl}
          alt="overlay"
          style={{
            ...overlayImage,
            height: overlayHeight,
            width: overlayWidth,
            ...this.overlayPosition(position),
          }}
        />
      </div>
    );
  }
}

export default Overlay;
