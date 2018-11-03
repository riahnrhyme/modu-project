import React, { Component, Fragment } from 'react';

import Num from './Number';
import Coco from './Coco';
import Pure from './Pure';
import Life from './Life';

class App extends Component {

  // 생성자
  constructor(){
    super();
    this.state = {
      number : 10,
      count : 0,
      data : {
        a : 10,
        b : 20,
        c : 30
      },
      pp : 0
    }

    this.popup1 = this.popup1.bind(this);
    this.increse = this.increse.bind(this);
  }

  popup1(){
    // alert('a');
    console.log(this.state.number); //undefined
  }

  popup2 = () => {
    // alert('a');
    console.log(this);
  }

  increse(){
    // this.state.number = this.state.number + 1;
    this.setState({
      number : this.state.number + 1,
      data : { ...this.state.data, a : 20 }
      // data : { a : 20, b : 20, c: 30 }
    });
  }

  getOrange(pp){
    console.log(pp);
    this.setState({ pp : pp });
  }

  render(){
    return(
      <Fragment>
        <h1>리액트 데이터 다루기</h1>
        <button onClick={this.popup1}>이벤트버튼</button>
        <Num open={this.state.number}
          upFunc={this.increse}
          getOrange={this.getOrange.bind(this)}/>
        <Coco downData={this.state.pp}/>
        <Pure count={this.state.number}/>
        <Life num={this.state.number}
          up={this.increse}/>
      </Fragment>
    )
  }
}

export default App;

// function VS arrow function
// this가 적용되는가?

/*
  state는 생성한 컴포넌트 내부에서 사용이 가능하다.
  state는 직접 데이터를 바꾸면 안된다.
  setState를 사용해서 꼭 변경해야 한다.
  컴포넌트 내부에 state는 setState 를 통해 값이 바뀌면 render 메소드를 다시 실행한다.
*/








