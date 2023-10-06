import CopyButton from "./CopyButton"
import TextBox from "./TextBox"

export default function Password(props) {
  return (
    <div class="password-section__password">
      <TextBox regeneratePassword={props.regeneratePassword} />
      <CopyButton />
    </div>
  )
}
