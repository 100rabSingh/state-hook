import './App.css';
import React, { useReducer } from 'react';
import ContextComponentC from './components/ContextComponentC';
import EffectCounter from './components/EffectCounter';
import EffectCounterTwo from './components/EffectCounterTwo';
import EffectDataFetching from './components/EffectDataFetching';
import EffectMouse from './components/EffectMouse';
import EffectMouseContainer from './components/EffectMouseContainer';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import IntervalHookCounter from './components/IntervalHookCounter';
import ReducerComponentA from './components/ReducerComponentA';
import ReducerComponentB from './components/ReducerComponentB';
import ReducerComponentC from './components/ReducerComponentC';
import ReducerCounterOne from './components/ReducerCounterOne';
import ReducerCounterThree from './components/ReducerCounterThree';
import ReducerCounterTwo from './components/ReducerCounterTwo';
import { UserProvider, ChannelProvider } from './components/UserContext';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import CallbackParentComponent from './components/CallbackParentComponent';
import MemoCounter from './components/MemoCounter';
import RefFocusInput from './components/RefFocusInput';
import RefClassTimer from './components/RefClassTimer';
import RefHookTimer from './components/RefHookTimer';


// <-------------------- Combining useReducer with UseContext ----------------------------->
export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

// <-------------------- Combining useReducer with UseContext ----------------------------->

function App() {
  // <-------------------- Combining useReducer with UseContext ----------------------------->
  // const [count, dispatch] = useReducer(reducer, initialState)
  // <-------------------- Combining useReducer with UseContext ----------------------------->

  return (
    <div className="App">
      <RefHookTimer />
      <RefClassTimer />
      {/* <RefFocusInput /> */}
      {/* <MemoCounter /> */}
      {/* <CallbackParentComponent /> */}
      {/* <DataFetchingTwo /> */}
      {/* <DataFetchingOne /> */}
      {/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        Count - {count}
        <ReducerComponentA />
        <ReducerComponentB />
        <ReducerComponentC />
      </CountContext.Provider > */}

      {/* <ReducerCounterThree /> */}
      {/* <ReducerCounterTwo /> */}
      {/* <ReducerCounterOne /> */}
      {/* <UserProvider value='100rab'>
        <ChannelProvider value='ReactPractice'>
          <ContextComponentC />
        </ChannelProvider>
      </UserProvider> */}

      {/* <EffectDataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <EffectMouseContainer /> */}
      {/* <EffectMouse /> */}
      {/* <EffectCounterTwo /> */}
      {/* <EffectCounter /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
    </div >
  );
}

export default App;
