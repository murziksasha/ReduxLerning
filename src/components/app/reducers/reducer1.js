const initialState = {value: 0};

const reducer1 = (state = initialState, action) => {
  switch(action.type) {
    case 'ZERO':
      return {
        ...state,
        value: state.value = 0
      };
    case 'INC':
      return {
        ...state,
        value: state.value + 1
      };
      case 'DEC':
        return {
          ...state,
          value: state.value - 1
        };
      case 'RND':
        return {
          ...state,
          value: state.value + action.payload
        };
      case 'DANGER':
        return {
          ...state,
          alarm: action.payload
        }
    default:
      return state; 
  }
}

export default reducer1;