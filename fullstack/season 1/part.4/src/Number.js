import React from 'react';
// 단방향 데이터 흐름

class Num extends React.Component {

  static defaultProps = {
    open : 0
  }

  constructor(){
    super();

    this.state = {
      orange : 100
    }
  }

  render(){
    return(
      <React.Fragment>
        <div>{this.props.open}</div>
        <button onClick={this.props.upFunc}>숫자증가</button>
        <button onClick={()=>{
          this.props.getOrange(this.state.orange);
        }}>데이터 주기</button>
      </React.Fragment>
    )
  }
}

export default Num;

/*

  props는 상위 컴포넌트로 부터 받은 데이터다.
  상위는 바로 한단계 위의 컴포넌트
  상위 컴포넌트는 하위 컴포넌트를 건너 띌수 없다.
  데이터는 상->하 쪽으로만 전달 된다.

*/














