import React, { Component, Fragment } from 'react';
import Main from './Main';
import Second from './Second';
import MakeCss from './MakeCss';
import Orange from './Orange';

// 리액트 컴포넌트는 하나의 태그로 부터 시작한다.
// 16 버전 이후에는 Fragment
/*
  const a ={
    num1 : 10,
  }

  const b = a.num1;
  const {num1} = a;
  console.log(num1);
*/

class Hello extends Component {
  render(){
    return ( // JSX 문법
      <Fragment>
        <h1 className="box">React Class</h1>
        <Main />
        <Second />
        <MakeCss />
        <input type="text" />
        <Orange />
      </Fragment>
    )
  }
}

export default Hello;



