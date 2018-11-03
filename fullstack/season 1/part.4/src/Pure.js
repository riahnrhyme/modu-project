/*
  컴포넌트는 2가지 방식으로 만들수 있다.
  클래스형 컴포넌트
  함수형 컴포넌트
  1. state를 만들수 없다.
  2. lifecycle이 없다.
  3. props 는 사용할수 있다.
*/

import React from 'react';

const Pure = ({ count }) => {
  return(
    <div>
      {count}
    </div>
  )
}

Pure.defaultProps = {
  count : 0,
}

export default Pure;














