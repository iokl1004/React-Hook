import React, { useState } from 'react';
import Counter from './Counter';
import Info from './Info';
import ContextSample from './ContextSample';
import Average from './Average';
import UsePromiseSample from './UsePromiseSample';

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
    // <Info />

    // 5. useMemo
    //<Average />

    // 8.1 useInputs
    // <Info />

    // 8.2 usePromise
    <UsePromiseSample />
  );
};

export default App;