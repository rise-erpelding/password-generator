import Password from "./Password";

export default function PasswordSection() {
  return (
    <section class="password-section">
      <Password />
      <p class="password-section__strength">
        Weak
      </p>
    </section>
  );
}
