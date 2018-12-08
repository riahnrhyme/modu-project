import React, { Component, Fragment } from 'react';
import './A3.css';

/* React LifeCycle */

class A3 extends Component {

  constructor(){
    super();
    console.log('constructor');
    // 가장먼저 실행되는 메소드
    this.state = {

    }
  }
/*
  UNSAFE_componentWillMount(){
    console.log('componentWillMount');
    // 랜더링이 되기전에 실행되는 메소드
    // 최초 1회만 실행된다.
    // 16버전이후 사용하지 않기를 권장한다.
    // 17버전이 되도 사용하고 싶으면 UNSAFE_
  }
*/
  componentDidMount(){
    console.log('componentDidMount');
    // 랜더링 후에 실행되는 메소드
    // 최초 1회만 실행된다.
    // ajax통신이나 HTTP통신은 이곳에 사용한다.
  }
/*
  UNSAFE_componentWillUpdate(){
    console.log('componentWillUpdate');
    // 랜더링 전에 실행되는 메소드
    // 마운트시에는 동작하지 않는다.
    // 16버전이후 사용하지 않기를 권장한다.
    // 17버전이 되도 사용하고 싶으면 UNSAFE_
  }
*/
  componentDidUpdate(){
    console.log('componentDidUpdate');
    // 랜더링 후에 실행되는 메소드
    // 마운트시에는 동작하지 않는다.
    // setState 쓰면 안된다.
  }

  // 16버전 부터 나온 라이플 사이클
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('getSnapshotBeforeUpdate');
    console.log(prevProps)
    console.log(prevState)
    // willupdate 를 대신할 수 있다.
    return {};
  }

  // componentWillReceiveProps
  static getDerivedStateFromProps(props,state){
    console.log(props);
    console.log(state);
    return {};
  }

  shouldComponentUpdate(nextProps,nextState){
    // true를 만나면 리랜더링을 한다.
    // false를 만나면 리랜더링을 하지 않는다.
    if ( nextProps.num > 10 ) {
      return true;
    }
    return false;
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
    // 언마운트될때 실행
  }

  render(){
    console.log('render');

    // map, filter 비교

    return(
      <Fragment>
        <div className="box">
          {this.props.num}
        </div>
      </Fragment>
    )
  }
}

export default A3;

// riahnrhyme
// riahnrhyme@gmail.com







