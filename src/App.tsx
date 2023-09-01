import './App.scss';

import { Component, createSignal } from 'solid-js';
import Header from './Header';
import PasswordSection from './PasswordSection';
import FormSection from './FormSection';

const App: Component = () => {
  // const [counter, setCounter] = createSignal(0);
  // setInterval(setCounter, 1000, (c: number) => c + 1);

  return (
    <div class="App">
      <main class="main">
        <Header />
        <PasswordSection />
        <FormSection />
      </main>
      {/* <div>
        <h1 class="header">{counter()}</h1>
      </div>
      <Counter /> */}
    </div>
  );
};

export default App;
