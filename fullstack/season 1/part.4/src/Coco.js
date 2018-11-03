import React, { Component, Fragment } from 'react';

class Coco extends Component {
  // constructor(){
  //   super();
  // }

  render(){
    return(
      <Fragment>
        <div>{this.props.downData}</div>
      </Fragment>
    )
  }
}

export default Coco;