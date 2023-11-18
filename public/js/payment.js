document.addEventListener("DOMContentLoaded", () => {
  const completePayment = document.querySelector(".btn");
  const cardName = document.querySelector(".cardName");
  const cardNameOutput = document.querySelector(".cardNameOutput");
  const cardNumber = document.querySelector(".cardNumber");
  const cardNumberOutput = document.querySelector(".cardNumberOutput");
  const expDate = document.querySelector(".expDate");
  const expDateOutput = document.querySelector(".expDateOutput");
  const paymentInfoDiv = document.querySelector(".payment-info");
  const paymentDisplay = document.querySelector(".payment-display");
  const confirmPayment = document.querySelector(".confirmPayment");

  function capturePaymentInfo() {
    cardNameOutput.innerHTML = cardName.value;
    cardNumberOutput.innerHTML = cardNumber.value;
    expDateOutput.innerHTML = expDate.value;
  }

  function displayPaymentInfo() {
    if (paymentDisplay.style.display === "none") {
      paymentDisplay.style.display = "block";
      paymentInfoDiv.style.display = "none";
      completePayment.style.display = "none";
      confirmPayment.style.display = "block";
    }
  }

  completePayment.addEventListener("click", capturePaymentInfo);
  completePayment.addEventListener("click", displayPaymentInfo);
});
