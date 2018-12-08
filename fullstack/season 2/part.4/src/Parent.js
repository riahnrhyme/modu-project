import React, { Component, Fragment } from 'react';
import A1 from './A1';
// import B1 from './B1';

class Parent extends Component {

  constructor(){
    super();

    this.state = {
      pcount : 0
    }
  }

  getData(data){
    console.log(data);
    this.setState({ pcount : data });
  }

  render(){
    return(
      <Fragment>
        {/*<h2>Parent 컴포넌트</h2>
        <h4>상위 컴포넌트로 부터 전달 받은 데이터는 {this.props.number}
        </h4>
        <button onClick={()=>{
          this.props.open(200)
        }}>숫자증가</button>
        <hr />
        <A1 open={this.props.open} getData={this.getData.bind(this)}/>
        <B1 number={this.props.number}
        pcount={this.state.pcount}/>*/}
        <A1 />
      </Fragment>
    )
  }
}

export default Parent;









