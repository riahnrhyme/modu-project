import React from 'react';

class Main extends React.Component {
  render(){
    let name = 'React';
    name = 'Node';

    let num = 10;
    // num>5 && name
    // num>5 ? name : ''

    return <h2>{num>5 && name} Project</h2>
  }
}

export default Main;