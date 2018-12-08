import * as types from '../actions/ActionsType';

const initialState = {
  num : 10,
  a : 20
}

const count = ( state = initialState, action ) => {

  switch(action.type){
    case types.INCREMENT:
      return { ...state, num : state.num + 100 };
    case types.DECREMENT:
      return { ...state, num : state.num - 100 };
    default:
      return state;
  }
}

export default count;