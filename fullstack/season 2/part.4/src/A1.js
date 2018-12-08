import React, { Component, Fragment } from 'react';
import A2 from './A2';

class A1 extends Component {

  constructor(){
    super();

    this.state = {
      count : 100
    }
  }

  render(){
    return(
      <Fragment>
        {/*<h2>A1 컴포넌트</h2>
        <button onClick={()=>{
          this.props.open(300);
        }}>숫자증가</button>
        <hr />
        <h4>A1 컴포넌트가 생성한 state 데이터는
        {this.state.count}</h4>
        <button onClick={()=>{
          this.setState({
            count : this.state.count + 50
          });
          this.props.getData(this.state.count + 50);
        }}>증가하기</button>*/}
        <A2 />
      </Fragment>
    )
  }
}

export default A1;









