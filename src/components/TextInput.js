import React from 'react';

class TextInput extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type="text" name={this.props.name} id={this.props.name} />
      </div>
    );
  }
}

export default TextInput;
