import React from 'react';

class ImageCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      spans: 0
    };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans });
  }

  render() {

    const { alt, src } = this.props;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={alt} src={src} />
      </div>
    )
  }
}

export default ImageCard;