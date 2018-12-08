import React, { Component } from 'react';
import B2 from './B2';

class B1 extends Component {
  render() {
    return (
      <div>
        <B2 number={this.props.number}/>
      </div>
    );
  }
}

export default B1;
