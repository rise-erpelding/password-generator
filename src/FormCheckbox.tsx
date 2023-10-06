export default function FormCheckbox(props) {
  const kebabCasedName = props.name.toLowerCase().replace(" ", "-");
  return (
    <div class="form-section__individual-checkbox-container">
      <label for={kebabCasedName}>{props.name}</label>
      <input type="checkbox" id={kebabCasedName} name={kebabCasedName} onchange={() => props.toggleChange(kebabCasedName)} />
    </div>
  )
}
