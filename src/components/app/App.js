import './App.css';
import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import * as actions from './actions';


const store = createStore(reducer);

const {dispatch, subscribe, getState } = store;

const update = () => {
  document.getElementById('counter').textContent = getState().value;
}

subscribe(update); //когда сработает подписка он вызовет 

// const bindActionCreator = (creator, dispatch) => (...args) => { //...srgs какие то приходящие аргументы
//   dispatch(creator(...args)); //возвращает функцию диспач которая вызывает creator ф-цию
// }

const {inc, dec, rnd, zero} = bindActionCreators(actions, dispatch);



// const incDispatch = bindActionCreators(inc, dispatch); 
// const decDispatch = bindActionCreators(dec, dispatch); 
// const zeroDispatch = bindActionCreators(zero, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch); 


document.getElementById('zero').addEventListener('click',zero);

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click',()=>{
  const value = Math.floor(Math.random()*10);
  rnd(value);
});

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
