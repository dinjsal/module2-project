document.addEventListener("DOMContentLoaded", () => {
  const completePayment = document.querySelector(".completePayment");
  const cardName = document.querySelector(".cardName");
  const cardNameOutput = document.querySelector(".cardNameOutput");
  const cardNumber = document.querySelector(".cardNumber");
  const cardNumberOutput = document.querySelector(".cardNumberOutput");
  const expDate = document.querySelector(".expDate");
  const expDateOutput = document.querySelector(".expDateOutput");
  const paymentInfoDiv = document.querySelector(".payment-info");
  const paymentDisplay = document.querySelector(".payment-display");
  const confirmPayment = document.querySelector(".confirmPayment");
  const bitcoinPayment = document.querySelector(".bitcoin");
  const bitcoinDisplay = document.querySelector(".payment-bitcoin");
  const completePaymentBit = document.querySelector(".completePaymentBit");
  const bitcoinOutput = document.querySelector(".bitcoin-output");
  const bitcoinNum = document.querySelector(".bitcoinNum");
  const paymentBitcoin2 = document.querySelector(".payment-bitcoin2");
  const confirmPaymentBit = document.querySelector(".confirmPaymentBit");

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

  function payWithBitcoin() {
    if (bitcoinDisplay.style.display === "none") {
      bitcoinDisplay.style.display = "block";
      paymentDisplay.style.display = "none";
      paymentInfoDiv.style.display = "none";
      completePayment.style.display = "none";
      confirmPayment.style.display = "none";
      completePaymentBit.style.display = "block";
    }
  }

  function capturePaymentBitcoin() {
    if (paymentBitcoin2.style.display === "none") {
      paymentBitcoin2.style.display = "block";
      bitcoinOutput.innerHTML = bitcoinNum.value;
      bitcoinDisplay.style.display = "none";
      completePaymentBit.style.display = "none";
      confirmPaymentBit.style.display = "block";
    }
  }

  completePayment.addEventListener("click", capturePaymentInfo);
  completePayment.addEventListener("click", displayPaymentInfo);
  bitcoinPayment.addEventListener("click", payWithBitcoin);
  completePaymentBit.addEventListener("click", capturePaymentBitcoin);
});


// event listener for the confirm Payment button
//to update flight status, to enable buttons from the profile page
document.getElementById('submitForm').addEventListener('click', () => {
  localStorage.setItem('flightBooked', 'true');

});