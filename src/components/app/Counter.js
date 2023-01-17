import React from 'react';

function Counter(props) {
  return (
    <div class="jumbotron">
      <h1>0</h1>
      <button class="btn btn-primary">ZERO</button>
      <button class="btn btn-primary">DEC</button>
      <button class="btn btn-primary">INC</button>
      <button class="btn btn-primary">RND</button>
    </div>
  );
}

export default Counter;