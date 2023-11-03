import { selectedPasswordOptions } from "./App";
import Password from "./Password";
import { ratePasswordStrength } from "./helpers/passwordStrengthRater";
import { createEffect, createSignal } from "solid-js";

export default function PasswordSection(props) {
  const [passwordStrength, setPasswordStrength] = createSignal("weak");
  
  createEffect(() => {
    setPasswordStrength(ratePasswordStrength(selectedPasswordOptions()));
  });

  const strengthClassName = () => `password-section__strength password-section__strength--${passwordStrength()}`;

  return (
    <section class="password-section">
      <Password regeneratePassword={props.regeneratePassword} />
      <p class={strengthClassName()}>
        {passwordStrength()}
      </p>
    </section>
  );
}
