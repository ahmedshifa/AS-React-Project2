import React from 'react';

const Greeting = React.memo(function Greeting({ name }) {
  console.log('Rendering Greeting for', name);
  return <h1>Hello, {name}!</h1>;
});

export default Greeting;



