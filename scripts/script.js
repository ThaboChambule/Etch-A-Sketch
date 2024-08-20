const grid = document.querySelector(".Container");

for (let i = 0; i < 256; i++) {
  const gridItem = document.createElement("div"); //creates new html element
  gridItem.classList.add("grid-item"); //gives the element a class
  grid.appendChild(gridItem); //used to add a new child element to parent element
}

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach ( item => {
    item.addEventListener("mouseover", () => {

        item.style.backgroundColor = 'yellow' //changes background colour
        


        console.log("it works")
    })
})
;
