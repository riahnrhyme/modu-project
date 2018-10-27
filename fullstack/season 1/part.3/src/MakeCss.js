import React, { Component } from 'react';
import './MakeCss.css';
import './MakeCss.scss';

// div { color : red, font-size :14px }

class MakeCss extends Component {
  render(){

    let styles = {
      color:'red',
      fontSize:20
    }

    return(
      <div>
        <div style={styles}>스타일 적용해보기</div>
        {/*<div className="box">스타일 적용해보기 2</div>*/}
        <div className="box2">스타일 적용해보기 3</div>
        <div className="box3">스타일 적용해보기 4</div>
      </div>
    )
  }
}

export default MakeCss;

//<div className="box">스타일 적용해보기 2</div>




