import './App.css';

import Counter from '../Counter/Counter';
import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import * as actions from './actions';


const store = createStore(reducer);
const {dispatch, subscribe, getState} = store;

const update = () => {
    document.getElementById('counter').textContent = getState().value;
}

subscribe(update);


const {inc, dec, zero, rnd} = bindActionCreators(actions, dispatch);

function App() {
  return (
      <Counter
        count={getState().value}
        inc={inc}
        dec={dec}
        zero={zero}
        rnd={()=> {
          const value= Math.floor(Math.random()*10);
          rnd(value);
        }}
      />
  );
}

export default App;
