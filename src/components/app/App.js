import './App.css';

import React from 'react';
import Counter from './Counter';
import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import * as actions from './actions';


const store = createStore(reducer);
const {dispatch, subscribe, getState} = store;

const update = () => {
    document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

const {inc, dec, zero, rnd} = bindActionCreators(actions, dispatch);

document.getElementById('zero').addEventListener('click', zero);

document.getElementById('inc').addEventListener('click', inc);


document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10 + 1);
    rnd(value);
});


function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
