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
    watermark: PropTypes.bool,
    overlayPadding: PropTypes.number,
  }

  static defaultProps = {
    imageHeight: 250,
    imageWidth: 250,
    overlayHeight: 30,
    overlayWidth: 30,
    position: null,
    watermark: true,
    overlayPadding: 10,
  }

  constructor() {
    super();
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const {
      url,
      overlayUrl,
      watermark,
    } = this.props;
    if (watermark) {
      const context = this.canvasRef;

      const img = new Image();
      const overlay = new Image();
      img.src = url;
      overlay.src = overlayUrl;

      img.onload = () => {
        context.drawImage(img, 0, 0);
        context.drawImage(...this.overlayCanvas(overlay));
      };
    }
  }

  overlayCanvas(overlay) {
    const {
      position,
      overlayHeight,
      imageHeight,
      imageWidth,
      overlayWidth,
      overlayPadding,
    } = this.props;
    switch (position) {
      case 'topLeft':
        return [overlay, overlayPadding, overlayPadding];
      case 'topRight':
        return [overlay, (imageWidth - overlayWidth) - overlayPadding, overlayPadding];
      case 'bottomLeft':
        return [overlay, overlayPadding, (imageHeight - overlayHeight) - overlayPadding];
      case 'center':
        return [
          overlay,
          Math.floor(imageWidth / 2 - overlayWidth / 2),
          Math.floor(imageHeight / 2 - overlayHeight / 2),
        ];
      default:
        return [
          overlay,
          (imageHeight - overlayHeight) - overlayPadding,
          (imageWidth - overlayWidth) - overlayPadding,
        ];
    }
  }

  overlayPosition() {
    const { position, overlayPadding } = this.props;
    switch (position) {
      case 'topLeft':
        return {
          top: overlayPadding,
          left: overlayPadding,
        };
      case 'topRight':
        return {
          top: overlayPadding,
          right: overlayPadding,
        };
      case 'bottomLeft':
        return {
          bottom: overlayPadding,
          left: overlayPadding,
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
          bottom: overlayPadding,
          right: overlayPadding,
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
      watermark,
    } = this.props;

    if (watermark) {
      return (
        <canvas
          ref={c => this.canvasRef = c.getContext('2d')}
          height={imageHeight}
          width={imageWidth}
        />
      );
    }

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
