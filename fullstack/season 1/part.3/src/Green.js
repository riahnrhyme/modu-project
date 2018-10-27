import React, { Component } from 'react';

class Green extends Component {
  render(){
    console.log(this.props)
    return(
      <div>
        전달받은 데이터는 {this.props.open} 과 {this.props.number} 이다.
      </div>
    )
  }
}

export default Green;




