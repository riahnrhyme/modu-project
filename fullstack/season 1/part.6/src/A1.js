import React, { Component } from 'react';
import A2 from './A2';

class A1 extends Component {
  render() {
    return (
      <div>
        <A2 change={this.props.change}/>
      </div>
    );
  }
}

export default A1;
