import { createSignal } from "solid-js";
import FormSlider from "./FormSlider";
import FormCheckbox from "./FormCheckbox";
import { generatePassword } from "./helpers/passwordGenerator";

export default function FormSection(props) {
  const [characterTypes, setCharacterTypes] = createSignal([]);
  const [passwordLength, setPasswordLength] = createSignal(16);
  const [formError, setFormError] = createSignal(false);

  const handleLengthChange = (length) => {
    setPasswordLength(Number(length));
  }

  const toggleCheckboxState = (id) => {
    setCharacterTypes((prevCharacterTypes) => {
      if (prevCharacterTypes.includes(id)) {
        return prevCharacterTypes.filter((type) => type !== id);
      } else {
        return [...prevCharacterTypes, id];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (characterTypes().length === 0) {
      setFormError(true);
    } else {
      setFormError(false);

      const passwordOptions = {
        length: passwordLength(),
        hasUppercase: characterTypes().includes('uppercase'),
        hasLowercase: characterTypes().includes('lowercase'),
        hasNumbers: characterTypes().includes('numbers'),
        hasSpecialCharacters: characterTypes().includes('special-characters'),
      };

      props.makePassword(passwordOptions);
    }
  }

  const formErrorSection = () => formError() ? (
    <p class="form-section__error">Select at least one password character type.</p>
  ) : null;

  return (
    <section class="form-section">
      {formErrorSection()}
      <form onsubmit={handleSubmit}>
        <FormSlider passwordLength={passwordLength()} handleSlide={handleLengthChange} />
        <div class="form-section__checkbox-area">
          <FormCheckbox name="Uppercase" toggleChange={toggleCheckboxState} />
          <FormCheckbox name="Lowercase" toggleChange={toggleCheckboxState} />
          <FormCheckbox name="Numbers" toggleChange={toggleCheckboxState} />
          <FormCheckbox name="Special Characters" toggleChange={toggleCheckboxState} />
        </div>
        <input type="submit" value="Generate!" />
      </form>
    </section>
  );
}
