import React, { Component } from 'react';

class Blog extends Component {

  handleClick = () => {

    const { history } = this.props;
    history.push('/');
  }

  render(){

    return(
      <div>
        <h2>{this.props.match.params.user} 블로그 페이지</h2>
        <button onClick={this.handleClick}>메인으로 돌아가기</button>
      </div>
    )
  }
}

export default Blog;