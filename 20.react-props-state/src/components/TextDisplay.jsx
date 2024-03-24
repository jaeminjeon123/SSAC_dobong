import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextDisplay extends Component {
  // valid 함수 정의
  valid = () => {
    console.log("콘솔 띄우기 성공!");
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        <p>{text}</p>
        <button onClick={this.valid}>Click me</button>
      </div>
    );
  }
}


TextDisplay.propTypes = {
  text: PropTypes.string.isRequired
};


TextDisplay.defaultProps = {
  text: "이건 기본 text props입니다."
};

export default TextDisplay;
