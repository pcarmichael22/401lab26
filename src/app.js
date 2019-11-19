import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';


function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h4 class="bg-blue-400">You clicked {counter} times</h4>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCounter(counter + 1)}>+Click me</button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setCounter(counter - 1)}>-Click me</button>
    </div>
  );
}

function App() {
    return (
        <div>
        <Header />
        <Counter />
        <Footer /> 
        </div>
    )
}

export default () => (
  <App />
)





