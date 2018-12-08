import React, { Component, Fragment } from 'react';
import A3 from './A3';
/* React LifeCycle */

class A2 extends Component {

  constructor(){
    super();
    this.state = {
      num : 0,
      show : false
    }

    this.onShow = this.onShow.bind(this);
    this.increse = this.increse.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  onShow(){
    this.setState({
      show : !this.state.show,
      num : 0
    });
  }

  increse(){
    this.setState({ num : this.state.num + 1 });
  }

  onHide(){
    this.setState({ show : false });
  }

  render(){
    return(
      <Fragment>
        <button
          onClick={this.onShow}>컴포넌트생성</button>
        <button
          onClick={this.increse}>증가하기</button>
        <button
          onClick={this.onShow}>컴포넌트삭제</button>
        {this.state.show &&
          <A3 num={this.state.num}/>}
      </Fragment>
    )
  }
}

export default A2;









