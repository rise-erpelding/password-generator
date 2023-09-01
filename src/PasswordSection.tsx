export default function PasswordSection() {
  return (
    <section class="password-section">
      <div class="password-section__password">
        <div class="password-section__input-container">
          <input type="text" class="password-section__input"></input>
          <button type="button" class="password-section__reload-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve">
              <path d="M2 2v7h7L5.8 5.8c.4-.4.8-.7 1.3-1 2.9-1.6 6.5-.6 8.2 2.3s.6 6.5-2.3 8.2-6.6.6-8.2-2.3H2.6c.4 1 1 1.9 1.8 2.7 3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3-8.2-3.1-11.3 0L2 2z" />
            </svg>
          </button>
        </div>
        <button type="button" class="password-section__copy-button">
          <span class="password-section__copy-button-icon-container">
            <svg viewBox="0 0 24 24">
              <path d="M16 1H4C3 1 2 2 2 3v14h2V3h12V1zm3 4H8C7 5 6 6 6 7v14c0 1 1 2 2 2h11c1 0 2-1 2-2V7c0-1-1-2-2-2zm0 16H8V7h11v14z"></path>
            </svg>
          </span>
          Copy
        </button>
      </div>
      <p class="password-section__strength">
        Weak
      </p>
    </section>
  );
}
