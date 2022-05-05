import './App.css';
import { createStore } from 'redux';


const initialState = {value: 0};
const reducer = (state = initialState, action) => {
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
    default:
      return state; 
  }

}

const store = createStore(reducer);

const update = () => {
  document.getElementById('counter').textContent = store.getState().value;
}

store.subscribe(update); //когда сработает подписка он вызовет 


//ЭТо и есть action creatoru:
const zero = () => ({type: 'ZERO'});
const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = (value) => ({type: 'RND', payload: value});

document.getElementById('zero').addEventListener('click',()=>{
  store.dispatch(zero());
});

document.getElementById('inc').addEventListener('click',()=>{
  store.dispatch(inc()); //при нажатии на кнопку вызывается dispatch которая менят сост
});

document.getElementById('dec').addEventListener('click',()=>{
  store.dispatch(dec());
});

document.getElementById('rnd').addEventListener('click',()=>{
  const value = Math.floor(Math.random()*10);
  store.dispatch(rnd(value));
});

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
