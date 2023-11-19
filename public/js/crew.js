document.addEventListener("DOMContentLoaded", () => {
  const pilot1ReadMore = document.querySelector(".pilot1");
  const description1 = document.querySelector(".description1");

  function showPilot1() {
    if (description1.style.display === "none") {
      description1.style.display = "block";
    }
  }
  pilot1ReadMore.addEventListener("click", showPilot1);
});
