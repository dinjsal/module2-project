let minus = document.querySelector(".minus");
let num = document.querySelector(".num");
let plus = document.querySelector(".plus");
let passengers1 = document.querySelector(".content-1-passengers");
let passengers2 = document.querySelector(".content-2-passengers");

let i = 1;

plus.addEventListener("click", () => {
  if (i === 1) {
    i++;
    num.innerText = i;
  }
});

minus.addEventListener("click", () => {
  if (i === 2) {
    i--;
    num.innerText = i;
  }
});

window.onload = function () {
  passengers2.style.display = "none";
};

plus.onclick = function () {
  passengers2.style.display = "block";
  passengers1.style.display = "none";
};

minus.onclick = function () {
  passengers2.style.display = "none";
  passengers1.style.display = "block";
};
