import { selectedPasswordOptions } from "./App";
import Password from "./Password";
import { ratePasswordStrength } from "./helpers/passwordStrengthRater";
import { createEffect, createSignal } from "solid-js";

export default function PasswordSection(props) {
  const [passwordStrength, setPasswordStrength] = createSignal("weak");
  
  createEffect(() => {
    setPasswordStrength(ratePasswordStrength(selectedPasswordOptions()));
  });

  return (
    <section class="password-section">
      <Password regeneratePassword={props.regeneratePassword} />
      <p class="password-section__strength">
        {passwordStrength()}
      </p>
    </section>
  );
}
