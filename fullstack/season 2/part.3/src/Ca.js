import React, { Component, Fragment } from 'react';

class Ca extends Component {

  render(){
    return(
      <Fragment>
        <h2>Ca 컴포넌트</h2>
        <p>상위 컴포넌트로 부터 받은 데이터는 {this.props.bb}</p>
      </Fragment>
    )
  }
}

export default Ca;









