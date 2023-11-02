export default function FormSlider(props) {
  return (
    <div class="form-section__slider-container">
      <label for="length">Password Length: {props.passwordLength}</label>
      <input
        type="range"
        id="length"
        name="length"
        min="4"
        max="30"
        value={props.passwordLength}
        onchange={(e) => props.handleSlide(e.target.value)}
      />
    </div>
  )
}
