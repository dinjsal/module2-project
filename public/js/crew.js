document.addEventListener("DOMContentLoaded", () => {
  const pilot1ReadMore = document.querySelector(".pilot1");
  const demo = document.querySelector("#demo");
  const description1 = document.querySelector(".description1");

  function showPilot1() {
    if (description1.style.display === "none") {
      description1.style.display = "block";
      demo.style.display = "none";
    }
  }
  pilot1ReadMore.addEventListener("click", showPilot1);
});
