export function getInitialState() {
  return {
    subscription: {
      status: "idle",
      message: ""
    }
  };
}

export function setSubscriptionStatus(state, status, message) {
  state.subscription.status = status;
  state.subscription.message = message;
}