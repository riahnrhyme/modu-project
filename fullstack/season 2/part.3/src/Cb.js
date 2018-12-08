import React, { Component, Fragment } from 'react';

class Cb extends Component {

  constructor(props){
    super(props);

    this.state = {
      data : this.props.cc,
    }
  }

  render(){
    return(
      <Fragment>
        <h2>Cb 컴포넌트</h2>
        <p>상위 컴포넌트로 부터 받은 데이터는 {this.state.data}</p>
      </Fragment>
    )
  }
}

export default Cb;









