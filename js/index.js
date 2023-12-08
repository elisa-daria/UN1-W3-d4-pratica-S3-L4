const button = document.querySelector("button");
button.addEventListener("submit", function (e) {
  e.preventDefault();
});

let randomicNumber;

const createNumberCell = function () {
  const tombolaDiv = document.getElementById("tombola-container");
  for (let i = 1; i <= 76; i++) {
    const tombolaCell = document.createElement("div");

    tombolaCell.classList.add("cells");
    const cellValue = document.createElement("h3");
    cellValue.innerText = i;

    if (i === randomicNumber) {
      tombolaCell.classList.add("selected");
    }
    tombolaCell.appendChild(cellValue);
    tombolaDiv.appendChild(tombolaCell);
  }
};

const generateNumber = button.addEventListener("click", function () {
  randomicNumber = Math.ceil(Math.random() * 76);
  console.log(randomicNumber);

  const spanNumber = document.getElementById("generatedNumber");
  spanNumber.innerHTML = "";
  const numberGenerated = document.createElement("span");

  numberGenerated.innerHTML = randomicNumber;

  spanNumber.appendChild(numberGenerated);
  //createNumberCell();se la chiamo qui mi da lo stile ma genera nuove tabelle con il clik al bottone
});
createNumberCell();
