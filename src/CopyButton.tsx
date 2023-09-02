export default function CopyButton() {
  return (
    <button type="button" class="password-section__copy-button">
      <span class="password-section__copy-button-icon-container">
        <svg viewBox="0 0 24 24">
          <path d="M16 1H4C3 1 2 2 2 3v14h2V3h12V1zm3 4H8C7 5 6 6 6 7v14c0 1 1 2 2 2h11c1 0 2-1 2-2V7c0-1-1-2-2-2zm0 16H8V7h11v14z"></path>
        </svg>
      </span>
      Copy
    </button>
  )
}
