import React, { Component } from 'react';

class Second extends Component {
  render(){

    let check = 0;

    return(
      <div>
        {
          (()=>{
            if ( check === 0 ) return 'a';
          })()
        }
        Second Component
      </div>
    )
  }
}

export default Second;