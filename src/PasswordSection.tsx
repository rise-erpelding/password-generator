import Password from "./Password";

export default function PasswordSection(props) {
  return (
    <section class="password-section">
      <Password regeneratePassword={props.regeneratePassword} />
      <p class="password-section__strength">
        Weak
      </p>
    </section>
  );
}
