let counter = 0;

    document.getElementById('plus').addEventListener('click', function() {
        counter++;
        document.getElementById('passengerNum').textContent = counter;
    });

    document.getElementById('minus').addEventListener('click', function() {
        if (counter > 0) {
            counter--;
            document.getElementById('passengerNum').textContent = counter;
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
