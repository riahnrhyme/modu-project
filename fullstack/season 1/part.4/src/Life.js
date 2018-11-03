import React from 'react';
/*
  render : 화면을 그려줄때 실행한다.
  componentDidMount : 화면이 그려지고 난 후 실행된다. 최초 1회만 실행된다. (Ajax 호출등을 한다.)
  componentDidUpdate : 화면이 바뀌고 나면 실행한다. 최초 생성시에는 실행되지 않는다.
  shouldComponentUpdate : return를 만날떄 그값이 true,false로 나눠지게 된다. true를 만나면 랜더링을 다시 한다.
  false를 만나면 랜더링을 다시 안한다.
  componentWillUnmount : 없어질때
*/

class Life extends React.Component {

  constructor(){
    super();

    this.state = {
      a : 10
    }
    console.log('constructor');
  }

  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps');
    return {}
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log(nextProps)

    if(nextProps.num > 20 ) {
      return false;
    }
    return true;
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('getSnapshotBeforeUpdate');
    return {} // componentDidUpdate 3번쨰 파라미터로 들어간다.
  }

  // UNSAFE_componentWillMount(){
  //   console.log('componentWillMount');
  // }
  //
  // UNSAFE_componentWillUpdate(){
  //   console.log('componentWillUpdate');
  // }

  render(){
    console.log('render');
    return(
      <div>
        LifeCycle
        <h2>{this.props.num}</h2>
        <button onClick={this.props.up}>증가하기</button>
      </div>
    )
  }
}

export default Life;







