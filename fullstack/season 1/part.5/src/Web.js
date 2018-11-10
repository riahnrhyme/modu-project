import React, { Component } from 'react';

class Web extends Component {

  constructor(){
      super();

      this.state = {
        list : [ 'react', 'redux' ],
        content : ''
      }
  }

  handleClick = () => {

    this.setState({
      list : this.state.list.concat([this.state.content]),
      content : ''
    });
    // this.setState({ list : this.state.list.concat([this.text.value]) });
    // this.text.value = '';
    this.text.focus();
  }

  handlePress = (e) => {

    if ( e.key === 'Enter' || e.type === 'click' ) {
      this.setState({
        list : this.state.list.concat([this.state.content]),
        content : ''
      });
      this.text.focus();
    }
  }

  handleChange = (e) => {
    this.setState({ content : e.target.value });
  }

  render(){

    const { list } = this.state;

    let num = [ 10, 20, 30, 40, 50 ];

    let r1 = num.map((value,index)=>{
      return value > 20;
    });

    let r2 = num.filter((value,index)=>{
      return value > 100;
    });

    console.log(r1);
    console.log(r2);

    return(
      <div>
        <h2>리액트 페이지</h2>
        {list.map((value,index)=>{ // [<div>aa</div> , <div>aa</div>]
          return <div key={index}>
            <div>{value}</div>
          </div>
        })}
        <input type="text" onChange={this.handleChange}
        onKeyPress={this.handlePress}
        value={this.state.content} ref={(a)=>this.text=a} />
        <button onClick={this.handlePress}>추가하기</button>
      </div>
    )
  }
}

export default Web;