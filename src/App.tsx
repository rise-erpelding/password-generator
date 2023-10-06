import './App.scss';

import { Component, createSignal } from 'solid-js';
import Header from './Header';
import PasswordSection from './PasswordSection';
import FormSection from './FormSection';
import { generatePassword } from './helpers/passwordGenerator';

export const [generatedPassword, setGeneratedPassword] = createSignal("");
export const [selectedPasswordOptions, setSelectedPasswordOptions] = createSignal({});

const App: Component = () => {
  const handleGeneratePassword = (passwordOptions) => {
    const password = generatePassword(passwordOptions);
    setSelectedPasswordOptions(passwordOptions);
    setGeneratedPassword(password);
  }

  const handleRegeneratePassword = () => {
    const password = generatePassword(selectedPasswordOptions());
    setGeneratedPassword(password);
  }

  return (
    <div class="App">
      <main class="main">
        <Header />
        <PasswordSection regeneratePassword={handleRegeneratePassword} />
        <FormSection makePassword={handleGeneratePassword} />
      </main>
    </div>
  );
};

export default App;
