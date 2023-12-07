const button = document.querySelector("button");
button.addEventListener("submit", function (e) {
  e.preventDefault();
});
const generateNumber = button.addEventListener("submit", function () {
  return randomicNumber;
});

const randomicNumber = Math.ceil(Math.random() * 99);
console.log(randomicNumber);

const createNumberCell = function () {
  const tombolaDiv = document.getElementById("tombola-container");

  for (let i = 0; i <= 99; i++) {
    const tombolaCell = document.createElement("div");

    const cellValue = document.createElement("h3");
    cellValue.innerText = i;
    tombolaCell.appendChild(cellValue);
    tombolaDiv.appendChild(tombolaCell);
  }
};
createNumberCell();
