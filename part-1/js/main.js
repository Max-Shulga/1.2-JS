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
const clearButton = document.getElementById('task-9-button-removeAll');

clearButton.addEventListener('click', () => {
    const childElements = document.querySelectorAll(".task-9-image");
    const childArray = Array.from(childElements);
    for (const childElement of childArray) {
        imageContainer.removeChild(childElement);
    }
})

//Task 10-11
const coordinate = document.getElementById('coordinate-block-text');

document.addEventListener('mousemove', (event) => {

    const userCoordinates = document.getElementById('userCoordinates');

    /*is it needed?*/
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
    }

    function success(pos) {
        const crd = pos.coords;
        userCoordinates.innerText = `\n Latitude : ${crd.latitude}\n Longitude: ${crd.longitude}`;
    }

    function error(err) {
        userCoordinates.innerText = `\n ERROR(${err.code}): ${err.message}`;
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const userLanguage = navigator.language

    coordinate.innerText = `X: ${mouseX}, Y: ${mouseY} \n Browser language: ${userLanguage}`;
})

//Task 13

if (window.localStorage) {
    const inputLocalStorage = document.getElementById("input-localStorage")
    const myStorage = window.localStorage
    const uniqueKey = 'myCustomKey';
    inputLocalStorage.value = myStorage.getItem(uniqueKey)

    inputLocalStorage.addEventListener("blur", () => {
        myStorage.setItem(uniqueKey, inputLocalStorage.value);
    })
}

const inputCookie = document.getElementById("input-cookies");

function setCookies(key, value) {
    const data = new Date();
    data.setTime(data.getTime() + 60 * 1000);
    const expires = 'expires=' + data.toUTCString();
    document.cookie = key + '=' + value + ';' + expires + ';path=/';
}

function getCookies(key) {
    const name = key + "=";
    const decodedCookies = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookies.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length)
        }
    }
    return '';
}

inputCookie.value = getCookies('text');
inputCookie.addEventListener('blur', () => {
    setCookies('text', inputCookie.value);
})

const inputSessionStorage = document.getElementById('input-sessionStorage');
const sessionStorageKey = 'text2';

inputSessionStorage.value = sessionStorage.getItem(sessionStorageKey);

inputSessionStorage.addEventListener('blur', () => {
    sessionStorage.removeItem(sessionStorageKey);
    sessionStorage.setItem(sessionStorageKey, inputSessionStorage.value);
})

//Task 14

const scrollToTopButton = document.getElementById('scrollToTopButton');

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
})

scrollToTopButton.addEventListener('click', scrollToTop);

//Task 15

const blockOut = document.getElementById('block-out')
const blockIn = document.getElementById('block-in')

document.addEventListener('click', e => {
    if (e.target === blockIn) {
        alert('block-in clicked')
    } else if (e.target === blockOut) {
        alert('block-out clicked')
    }
})

//Task 16

const task16Button = document.getElementById('task-16-button')
const graySquare = document.getElementById('gray-square')
task16Button.addEventListener('click', () => {
    graySquare.style.display = 'block';
    document.body.style.overflow = "hidden";

})
graySquare.addEventListener('click', () => {
    graySquare.style.display = 'none';
    document.body.style.overflow = "auto";
})

//Task 17

const form = document.getElementById("myForm");

form.addEventListener('submit', (event) => {
    event.preventDefault()
})
//Task 18
document.addEventListener("DOMContentLoaded", function () {
    const dropArea = document.getElementById("drop-area");
    const inputFile = document.getElementById("input-file");
    const imgView = document.getElementById("img-view");

    inputFile.addEventListener("change", uploadImage);

    function uploadImage() {
        let imgLink = URL.createObjectURL(inputFile.files[0])
        imgView.style.backgroundImage = `url(${imgLink})`;
        imgView.textContent = '';
        imgView.style.border = 0;
    }

    dropArea.addEventListener('dragover',(e)=>{
        e.preventDefault();
    });
    dropArea.addEventListener('drop',(e)=>{
        e.preventDefault();
        inputFile.files = e.dataTransfer.files
        uploadImage()
    });
})
