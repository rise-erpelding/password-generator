export default function FormSection() {
  return (
    <section class="form-section">
      <form>
        <div class="form-section__slider-container">
          <label for="volume">Volume</label>
          <input type="range" id="length" name="length" min="5" max="30" />
        </div>
        <div class="form-section__checkbox-area">
          <div class="form-section__individual-checkbox-container">
            <label for="uppercase">Uppercase</label>
            <input type="checkbox" id="uppercase" name="uppercase" />
          </div>
          <div class="form-section__individual-checkbox-container">
            <label for="lowercase">Lowercase</label>
            <input type="checkbox" id="lowercase" name="lowercase" />
          </div>
          <div class="form-section__individual-checkbox-container">
            <label for="numbers">Numbers</label>
            <input type="checkbox" id="numbers" name="numbers" />
          </div>
          <div class="form-section__individual-checkbox-container">
            <label for="special-characters">Special Characters</label>
            <input type="checkbox" id="special-characters" name="special-characters" />
          </div>
        </div>
      </form>
    </section>
  );
}
