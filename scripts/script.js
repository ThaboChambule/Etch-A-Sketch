num = 256;

getGrid(num);

function getGrid(num) {
  const grid = document.querySelector(".Container");
  grid.innerHTML = "";

  for (let i = 0; i < num; i++) {
    const gridItem = document.createElement("div"); //creates new html element
    gridItem.classList.add("grid-item"); //gives the element a class
    grid.appendChild(gridItem); //used to add a new child element to parent element
  }

  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = getRandomColor(); //changes background colour
    });
  });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const button = document.querySelector(".button");
button.addEventListener("click", () => {
  let userInput = prompt("Please enter the number of squares per side"); //gets user input
  if (userInput > 0 && userInput <= 100) {
    let num = userInput * userInput;
    getGrid(num);
  }
  else{
    alert("Please enter value between 0 and 100")
  }
});
