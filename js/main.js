function squareDisplayNone(square) {
    square.style.display = 'none';
}

function squareDisplayBlock(square) {
    square.style.display = 'block';
}

//Task 1
const blackSquare = document.getElementById("black_square");
const hideWithCSSButton = document.getElementById("hideWithCSS")
const hideWithJSButton = document.getElementById("hideWithJS")
const hideWithJSAndCSSButton = document.getElementById("hideWithCSSAndJS")

hideWithCSSButton.addEventListener("click", () => {
    squareDisplayNone(blackSquare)
})

hideWithJSButton.addEventListener("click", () => {
    blackSquare.remove();
})

hideWithJSAndCSSButton.addEventListener("click", () => {
    blackSquare.classList.add("hidden");
})

//Task 2

const switchDisplayButton = document.getElementById("switchDisplayButton");

switchDisplayButton.addEventListener("click", () => {
    blackSquare.style.display = blackSquare.style.display !== 'none' ? 'none' : 'block';
})

//Task 3

const hideAllButton = document.getElementById("hideAllButton");

const squaresArray = document.getElementsByClassName("black_square");

hideAllButton.addEventListener('click', () => {
    for (const element of squaresArray) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
});

//Task 4

const task4Button = document.getElementById("task-4-button");

task4Button.addEventListener("click", () => {
    document.querySelector(document.querySelector("#task-4-input").value).remove();
})

//Task 5

const yellowSquare = document.getElementsByClassName("yellow-square");
let clicked = false;

yellowSquare[0].addEventListener("click", () => {
    if (!clicked) {
        alert("Привіт");
    } else {
        yellowSquare[0].remove();
    }
    clicked = !clicked;
})

//Task 6

const task6Button = document.getElementById("task-6-button");
const redSquare = document.getElementById("red-square");

task6Button.addEventListener("mouseover", () => {
    redSquare.style.opacity = '1';
})
task6Button.addEventListener("mouseout", () => {
    redSquare.style.opacity = '0';
})

//Task 7

const task7Input = document.getElementById("task-7-input");
const greenSquare = document.getElementById("green-square")


task7Input.addEventListener('focus', () => {
    squareDisplayBlock(greenSquare);
})

task7Input.addEventListener('input', () => {
    squareDisplayNone(greenSquare);
})
task7Input.addEventListener('focusout', () => {
    squareDisplayNone(greenSquare);
})

//Task 8

const task8Button = document.getElementById('task-8-button');

task8Button.addEventListener('click', () => {
    const task8InputLink = document.getElementById('task-8-input').value;
    const task8Image = document.getElementById('task-8-link-image')
    task8Image.alt = 'No image in this link';
    task8Image.src = task8InputLink
})

//Task 9

const addButton = document.getElementById('task-9-button-add');
const imageContainer = document.getElementById("task-9-images-container");

addButton.addEventListener('click', () => {
    let task9InputText = document.getElementById('task-9-textarea').value;
    task9InputText = task9InputText.replaceAll(" ", '');
    const linkArray = task9InputText.split(/\r?\n/);
    for (const link of linkArray) {
        const newImage = document.createElement('img');
        newImage.alt = 'No image in this link';
        newImage.classList.add('task-9-image');
        newImage.src = link;
        imageContainer.appendChild(newImage);
    }
    document.getElementById('task-9-textarea').value = '';
})
const clearButton = document.getElementById('task-9-button-removeAll')

clearButton.addEventListener('click', () => {
    const childElements = document.querySelectorAll(".task-9-image");
    const childArray = Array.from(childElements);
    for (const childElement of childArray) {
        imageContainer.removeChild(childElement);
    }
})

//Task 10
