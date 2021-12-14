import './App.css';
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
import ReducerCounterOne from './components/ReducerCounterOne';
import { UserProvider, ChannelProvider } from './components/UserContext';

function App() {
  return (
    <div className="App">

      <ReducerCounterOne />
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
    </div>
  );
}

export default App;
