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
    imageHeight: PropTypes.number,
    imageWidth: PropTypes.number,
    overlayHeight: PropTypes.number,
    overlayWidth: PropTypes.number,
    position: PropTypes.string,
  }

  static defaultProps = {
    imageHeight: 250,
    imageWidth: 250,
    overlayHeight: 30,
    overlayWidth: 30,
    position: null,
  }

  constructor() {
    super();
    this.state = {
      error: false,
    };
  }

  componentDidMount() {
    const { url } = this.props;
    if (typeof url === 'string' || url instanceof String) {
      this.setState({
        error: false,
      });
    } else {
      this.setState({
        error: true,
      });
    }
  }

  componentWillReceiveProps() {

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
    const { error } = this.state;
    const {
      url,
      imageHeight,
      imageWidth,
      overlayHeight,
      overlayWidth,
      position,
    } = this.props;

    if (error) {
      return <p>Image URL required</p>;
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
          src={url}
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
