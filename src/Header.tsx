import SvgLock from "./SvgLock";
import SvgX from "./SvgX";

export default function Header() {
  return (
    <header class="header">
      <SvgLock />
      <div class="password-graphic">
        <SvgX />
        <SvgX />
        <SvgX />
        <SvgX />
      </div>
      <h1>Password Generator</h1>
      <p class="tagline">Create strong and secure passwords to keep your account safe online.</p>
    </header>
  );
}
