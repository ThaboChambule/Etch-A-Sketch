const grid = document.querySelector(".Container")

for(i = 0 ; i < 256; i++)
{
    const gridItem = document.createElement('div'); //creates new html element
    gridItem.classList.add('grid-item'); //gives the element a class
    grid.appendChild(gridItem) //used to add a new child element to parent element
}