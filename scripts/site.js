import { getInitialState, setSubscriptionStatus } from "../js/state.js";

const state = getInitialState();

const form = document.querySelector("#newsletter-form");
const message = document.querySelector("#form-message");

function renderFormMessage() {
  message.textContent = state.subscription.message;
  message.dataset.status = state.subscription.status;
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const email = String(formData.get("email") || "").trim();

  if (!validateEmail(email)) {
    setSubscriptionStatus(state, "error", "Please enter a valid email address.");
    renderFormMessage();
    return;
  }

  setSubscriptionStatus(state, "success", "You’re on the list. Our next dispatch will arrive soon.");
  form.reset();
  renderFormMessage();
});

renderFormMessage();