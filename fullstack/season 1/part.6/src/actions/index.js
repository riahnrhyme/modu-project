import * as types from './ActionsType';

export const increse = () => {
  return {
    type : types.INCREMENT
  }
}

export const decrese = () => {
  return {
    type : types.DECREMENT
  }
}