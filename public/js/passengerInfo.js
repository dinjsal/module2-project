// const travelValue = localStorage.getItem("travelValue");

document.addEventListener("DOMContentLoaded", () => {
  //to apply autofill to the form
  const departure = localStorage.getItem("departureValue");
  const destination = localStorage.getItem("destinationValue");
  const departureDate = localStorage.getItem("departureDateValue");
  const returnDate = localStorage.getItem("returnDateValue");

  if (departure) {
    document.getElementById("departure").value = departure;
  }
  if (destination) {
    document.getElementById("destination").value = destination;
  }
  if (departureDate) {
    document.getElementById("departureDate").value = departureDate;
  }
  if (returnDate) {
    document.getElementById("returnDate").value = returnDate;
  }

  //to check if the form is completed
  function isFormCompleted(formId) {
    const form = document.getElementById(formId);
    let isCompleted = true;

    form.querySelectorAll("input").forEach((input) => {
      if (input.type !== "submit" && input.value.trim() === "") {
        isCompleted = false;
      }
    });

    return isCompleted;
  }

  //action for submit button
  document.getElementById("submitForm").addEventListener("click", function () {
    // to check if any of the forms is completed
    if (isFormCompleted("formA")) {
      document.getElementById("formA").submit();

      // to redirect after submission
      // } else if (isFormCompleted("formB")) {
      //   document.getElementById("formB").submit();
    } else {
      alert("Please complete the form before confirming the booking.");
    }
  });
  // capture passenger info for rendering
  const captureContainer = document.querySelector(".capture-container");
  const captureButtons = document.querySelector("#capture");
  const captureInfoButton = document.querySelector(".capture-info");
  const mainContainer = document.querySelector(".main-container");
  const mainButtons = document.querySelector(".main-buttons");
  const firstName = document.querySelector(".first-name");
  const lastName = document.querySelector(".last-name");
  const birthDate = document.querySelector(".birth-date");
  const address = document.querySelector(".address");
  const departure1 = document.querySelector(".departure");
  const destination1 = document.querySelector(".destination");
  const departureDate1 = document.querySelector(".departure-date");
  const returnDate1 = document.querySelector(".return-date");
  const passport = document.querySelector(".passport");
  const captureConfirm = document.querySelector(".capture-confirm");

  function hideShowCapture() {
    if (captureContainer.style.display === "none") {
      captureContainer.style.display = "block";
      captureButtons.style.display = "block";
      mainContainer.style.display = "none";
      mainButtons.style.display = "none";
      document.querySelector(".first-name-output").innerText = firstName.value;
      document.querySelector(".last-name-output").innerText = lastName.value;
      document.querySelector(".birth-date-output").innerText = birthDate.value;
      document.querySelector(".address-output").innerText = address.value;
      document.querySelector(".departure-output").innerText = departure1.value;
      document.querySelector(".destination-output").innerText =
        destination1.value;
      document.querySelector(".departure-date-output").innerText =
        departureDate1.value;
      document.querySelector(".return-date-output").innerText =
        returnDate1.value;
      document.querySelector(".passport-output").innerText = passport.value;
    }
  }
  captureInfoButton.addEventListener("click", hideShowCapture);
});

document.addEventListener("DOMContentLoaded", function () {
  let counter = 1;

  // increment button event listener
  document.getElementById("plus").addEventListener("click", function () {
    if (counter < 2) {
      counter++;
      updateFormDisplay(counter);
    }
  });

  // decrement button event listener
  document.getElementById("minus").addEventListener("click", function () {
    if (counter > 1) {
      counter--;
      updateFormDisplay(counter);
    }
  });

  //  to update the form display and also apply styles
  function updateFormDisplay(counterValue) {
    document.getElementById("passengerNum").textContent = counterValue;

    if (counterValue === 2) {
      document.getElementById("form2").style.display = "block";
      applyStylesToForms();
    } else {
      document.getElementById("form2").style.display = "none";
      resetStylesForForm1();
    }
  }

  //  to apply styles to both forms
  function applyStylesToForms() {
    let forms = document.querySelectorAll(".form1, .form2");
    forms.forEach(function (form) {
      form.style.paddingTop = "5%";
      form.style.marginLeft = "5%";
      form.style.marginBottom = "5%";
      form.style.marginRight = "10%";
    });
  }

  //  to reset styles for form1
  function resetStylesForForm1() {
    let form1 = document.querySelector(".form1");
    form1.style.cssText = "";
    form1.style.marginLeft = "25%";
    form1.style.marginRight = "25%";
  }
});

// const minus = document.querySelector(".minus");
// const num = document.querySelector(".num");
// const plus = document.querySelector(".plus");
// const content1 = document.querySelector(".content");
// const content2 = document.querySelector(".content2");

// window.addEventListener("load", () => {
//   content2.style.display = "none";
// });

// let i = 1;

// plus.addEventListener("click", () => {
//   if (i === 1) {
//     i++;
//     num.innerText = i;
//   }
// });

// minus.addEventListener("click", () => {
//   if (i === 2) {
//     i--;
//     num.innerText = i;
//   }
// });

// plus.onclick = function () {
//   if (content2.style.display === "none") {
//     content2.style.display = "block";
//     content1.style.display = "none";
//   }
// };

// minus.onclick = function () {
//   if (content2.style.display === "block") {
//     content2.style.display = "none";
//     content1.style.display = "block";
//   }
// };
