const initialState = {value: 200};

const reducer2 = (state = initialState, action) => {
  switch(action.type) {
    case 'ZERO2':
      return {
        ...state,
        value: state.value = 0
      };
    case 'INC2':
      return {
        ...state,
        value: state.value + 1
      };
      case 'DEC2':
        return {
          ...state,
          value: state.value - 1
        };
      case 'RND2':
        return {
          ...state,
          value: state.value + action.payload
        };
    default:
      return state; 
  }
}

export default reducer2;