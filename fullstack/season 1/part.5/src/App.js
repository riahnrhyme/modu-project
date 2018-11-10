import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

import Main from './Main';
import Blog from './Blog';
import Stack from './Stack';

class App extends Component {

  constructor(){
    super();

    this.state = {
      logged : true
    }
  }

  render(){
    return(
      <Router>
        <Fragment>
          <h1>리액트 라우터</h1>
          <div>
            <div><NavLink exact to="/"
              activeClassName="show">메인으로</NavLink></div>
            <div><NavLink to="/blog/a"
              activeClassName="show">A 블로그로</NavLink></div>
            <div><NavLink to="/blog/b"
              activeClassName="show">B 블로그로</NavLink></div>
            <div><NavLink to="/stack"
              activeClassName="show">기술페이지</NavLink></div>
          </div>
          <Fragment>
            <Route exact path="/" component={Main}/>
            <Route path="/blog/:user" component={Blog}/>
            {/*<Route path="/stack" component={Stack}/>*/}
            <Route path="/stack" render={(props)=><Stack {...props} logged={this.state.logged}/>}/>
          </Fragment>
        </Fragment>
      </Router>
    )
  }
}

export default App;

/*

  3가지의 Props를 가지고 있다.

  history : 라우트 링크 순서를 쌓는다.
  match : 라우트 주소의 매칭 데이터
  location : 현재 위치 정보

*/