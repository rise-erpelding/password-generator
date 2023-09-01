export default function Header() {
  return (
    <header class="header">
      <div class="lock-graphic">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <path d="M34 23h-2v-4c0-3.9-3.1-7-7-7s-7 3.1-7 7v4h-2v-4c0-5 4-9 9-9s9 4 9 9v4z" />
          <path d="M33 40H17c-1.7 0-3-1.3-3-3V25c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3zM17 24c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V25c0-.6-.4-1-1-1H17z" />
          <circle cx="25" cy="28" r="2" />
          <path d="M25.5 28h-1l-1 6h3z" />
        </svg>
      </div>
      <div class="password-art">
        <div class="password-art__x">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <line x1="5" x2="25" y1="5" y2="25" stroke="black" stroke-width="5" stroke-linecap="round" />
            <line x1="25" x2="5" y1="5" y2="25" stroke="black" stroke-width="5" stroke-linecap="round" />
          </svg>
        </div>
        <div class="password-art__x">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <line x1="5" x2="25" y1="5" y2="25" stroke="black" stroke-width="5" stroke-linecap="round" />
            <line x1="25" x2="5" y1="5" y2="25" stroke="black" stroke-width="5" stroke-linecap="round" />
          </svg>
        </div>
        <div class="password-art__x">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <line x1="5" x2="25" y1="5" y2="25" stroke="black" stroke-width="5" stroke-linecap="round" />
            <line x1="25" x2="5" y1="5" y2="25" stroke="black" stroke-width="5" stroke-linecap="round" />
          </svg>
        </div>
        <div class="password-art__x">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <line x1="5" x2="25" y1="5" y2="25" stroke="black" stroke-width="5" stroke-linecap="round" />
            <line x1="25" x2="5" y1="5" y2="25" stroke="black" stroke-width="5" stroke-linecap="round" />
          </svg>
        </div>
      </div>
      <h1>Password Generator</h1>
      <p class="tagline">Create strong and secure passwords to keep your account safe online.</p>
    </header>
  );
}
