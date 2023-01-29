import { connect } from 'react-redux';


function Counter2({counter, onZero2, onDec2, onAdd2, onRND2}) {
  return (
    <>
      <div className='jumbotron'>
        <h1>{counter}</h1>
        <button onClick = {onZero2} className="btn btn-primary">ZERO</button>
        <button onClick = {onDec2} className="btn btn-primary">DEC</button>
        <button onClick = {onAdd2} className="btn btn-primary">INC</button>
        <button onClick = {onRND2} className="btn btn-primary">RND</button>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.reducer2.value,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd2: () => dispatch({type: 'INC2'}),
    onDec2: () => dispatch({type: 'DEC2'}),
    onZero2: () => dispatch({type: 'ZERO2'}),
    onRND2: () => dispatch({type: 'RND2', payload: 50}),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter2);

