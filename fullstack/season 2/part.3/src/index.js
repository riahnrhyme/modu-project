/*
  CRA 2버전

  1. 익스플로러를 버림
  2. SASS 가 바로 적용 된다.
*/

// const React = require('react'); // require
import React from 'react'; // es6
import ReactDOM from 'react-dom'; // 태그에 DOM을 그리기 위한

// const App = () => {
//   return <h1>리액트 프로젝트</h1>;
// }
// import App from './App';
import Web from './Web';

ReactDOM.render(<Web />,
  document.getElementById('root'));








