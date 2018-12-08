import React, { Component, Fragment } from 'react';
import Ca from './Ca';
import Cb from './Cb';

class Parent extends Component {

  render(){
    return(
      <Fragment>
        <h1>상위 컴포넌트</h1>
        <p>상위 컴포넌트로 부터 받은 데이터는 {this.props.number}</p>
        <Ca bb={this.props.number} />
        <Cb cc={this.props.number}/>
      </Fragment>
    )
  }
}

export default Parent;









