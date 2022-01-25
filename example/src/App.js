import React, { useState } from 'react';
import Counter from './Counter';
import Info from './Info';
import ContextSample from './ContextSample';

function App() {
  const [visible, saetVisible] = useState(false);
  return (
    // 1. useState 
    // <Counter/>

    // 2. useEffect
    // <div>
    //   <button onClick = {() => {
    //     saetVisible(!visible);
    //   }}> {visible ? '숨기기' : '보이기'} </button>
    //   <hr/>
    //   {visible && <Info/> }
    // </div>

    // 3. useContext
    // <ContextSample />

    // 4. useReducer
    // <Counter />
    <Info />

  );
};

export default App;