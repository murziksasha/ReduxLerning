import { connect } from 'react-redux';


function Counter2({counter, onZero, onDec, onAdd, onRND}) {
  return (
    <>
    <br />
    <hr />
      <div className='jumbotron'>
        <h1>{counter}</h1>
        <button onClick = {onZero} className="btn btn-primary">ZERO</button>
        <button onClick = {onDec} className="btn btn-primary">DEC</button>
        <button onClick = {onAdd} className="btn btn-primary">INC</button>
        <button onClick = {onRND} className="btn btn-primary">RND</button>
      </div>
    </>
  );
}

function mapStateToProps() {
  return {

  }
}

function mapDispatchToProps() {
  return {
    
  }
}


export default connect()(Counter2);

