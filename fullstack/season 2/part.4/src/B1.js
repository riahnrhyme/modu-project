import React, { Component, Fragment } from 'react';

class B1 extends Component {

  render(){
    return(
      <Fragment>
        <h2>B1 컴포넌트</h2>
        <h4>A1이 만든 state 데이터는 {this.props.pcount}</h4>
        <hr/>
        <h4>상위 컴포넌트로 부터 전달받은 데이터는
        {this.props.number}
        </h4>
      </Fragment>
    )
  }
}

export default B1;









