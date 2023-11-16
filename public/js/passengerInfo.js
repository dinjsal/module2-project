
document.addEventListener('DOMContentLoaded', function() {
  let counter = 1; 

  // increment button event listener
  document.getElementById('plus').addEventListener('click', function() {
      if (counter < 2) {
          counter++;
          updateFormDisplay(counter);
      }
  });

  // decrement button event listener
  document.getElementById('minus').addEventListener('click', function() {
      if (counter > 1) {
          counter--;
          updateFormDisplay(counter);
      }
  });

  //  to update the form display and apply styles
  function updateFormDisplay(counterValue) {
      document.getElementById('passengerNum').textContent = counterValue;

      if (counterValue === 2) {
          document.getElementById('form2').style.display = 'block';
          applyStylesToForms();
      } else {
          document.getElementById('form2').style.display = 'none';
          resetStylesForForm1();
      }
  }

  //  to apply styles to both forms
  function applyStylesToForms() {
      let forms = document.querySelectorAll('.form1, .form2');
      forms.forEach(function(form) {
          form.style.paddingTop = '5%';
          form.style.marginLeft = '5%';
          form.style.marginBottom = '5%';
          form.style.marginRight = '10%';
      });
  }

  //  to reset styles for form1
  function resetStylesForForm1() {
      let form1 = document.querySelector('.form1');
      form1.style.cssText = ''; 
      form1.style.marginLeft = '25%';
      form1.style.marginRight = '25%';
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
