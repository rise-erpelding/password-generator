import FormSlider from "./FormSlider";
import FormCheckbox from "./FormCheckbox";

export default function FormSection() {
  return (
    <section class="form-section">
      <form>
        <FormSlider />
        <div class="form-section__checkbox-area">
          <FormCheckbox name="Uppercase" />
          <FormCheckbox name="Lowercase" />
          <FormCheckbox name="Numbers" />
          <FormCheckbox name="Special Characters" />
        </div>
      </form>
    </section>
  );
}
