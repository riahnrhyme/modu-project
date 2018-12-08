import React, { Component, Fragment } from 'react';
import './Make.css';
import './Make.scss';
/*
  스타일적용하기 4가지 방법
  1. 인라인방식
  2. css file import
  3. 기존 방식
  4. sass ( CRA 버전 2 이상 )
*/

class Make extends Component {
  render(){

    let styles = {
      color : 'red',
      fontSize : 12,
      marginTop : 0
    }

    return(
      <Fragment>
        <h3 style={styles}>스타일 적용하기</h3>
        <h3 className="color">스타일 적용하기</h3>
        <h3 className="box">스타일 적용하기</h3>
        <h3 className="sass">스타일 적용하기</h3>
        <input type="text" />
        <button>버튼</button>
      </Fragment>
    )
  }
}

export default Make;








