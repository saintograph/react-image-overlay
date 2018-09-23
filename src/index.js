import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Overlay extends Component {
  static propTypes = {
    url: PropTypes.string,
  }

  static defaultProps = {
    url: 'https://via.placeholder.com/250x250',
  }

  constructor() {
    super();
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const {
      url,
    } = this.props;
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = url;

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
  }

  render() {
    return (
      <Fragment>
        <canvas id="canvas" height={250} width={250} />
      </Fragment>
    );
  }
}
