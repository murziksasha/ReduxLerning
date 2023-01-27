import { connect } from 'react-redux';
import {inc, dec, zero } from '../app/actions';


const Counter = ({counter, inc, dec, rnd, zero}) => {
  return(
    <div className="jumbotron">
        <h1>{counter}</h1>
        <button onClick = {zero} className="btn btn-primary">ZERO</button>
        <button onClick = {dec} className="btn btn-primary">DEC</button>
        <button onClick = {inc} className="btn btn-primary">INC</button>
        <button onClick = {rnd} className="btn btn-primary">RND</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    counter: state.value
  }
}


export default connect(mapStateToProps)(Counter);