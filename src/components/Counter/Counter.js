import { connect } from 'react-redux';
// import {inc, dec, zero } from '../app/actions';


const Counter = ({counter, onAdd, onDec, onZero, onRND}) => {
  return(
    <div className="jumbotron">
        <h1>{counter}</h1>
        <button onClick = {onZero} className="btn btn-primary">ZERO</button>
        <button onClick = {onDec} className="btn btn-primary">DEC</button>
        <button onClick = {onAdd} className="btn btn-primary">INC</button>
        <button onClick = {onRND} className="btn btn-primary">RND</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    counter: state.value
  }
}

function mapDispatchToProps(dispatch){
  return {
    onAdd: () => dispatch({type: 'INC'}),
    onDec: () => dispatch({type: 'DEC'}),
    onZero: () => dispatch({type: 'ZERO'}),
    onRND: () => dispatch({type: 'RND', payload: 10})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);