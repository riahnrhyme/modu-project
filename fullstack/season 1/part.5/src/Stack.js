import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

// class List extends Component {
//   render(){
//
//     const { name } = this.props.match.params
//
//     return(
//       <h3>{name} 기술스택</h3>
//     )
//   }
// }

const List = ({ match }) => {
  return(
    <h3>{match.params.name} 기술스택</h3>
  )
}

class Stack extends Component {

  render(){
    console.log(this.props);

    return(
      <div>
        {!this.props.logged&&<Redirect to="/" />}
        <h2>기술 페이지</h2>
        <div>
          <div><Link to="/stack/react">React</Link></div>
          <div><Link to="/stack/angular">Angular</Link></div>
          <div><Link to="/stack/vue">Vue</Link></div>
        </div>
        <div>
          <Route path="/stack/:name" component={List} />
        </div>
      </div>
    )
  }
}

export default Stack;