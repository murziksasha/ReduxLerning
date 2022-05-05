import './App.css';

import { createStore, bindActionCreators } from 'redux';


import * as actions from './actions';

import Counter from '../Counter/Counter';


const {dispatch, getState } = store;




const {inc, dec, rnd, zero} = bindActionCreators(actions, dispatch);



function App() {
  return (
      <Counter
        counter={getState().value}
        inc={inc}
        dec={dec}
        rnd={()=> {
          const value= Math.floor(Math.random()*10);
          rnd(value);
        }}
      />
  );
}

export default App;
