// Exercise 53
document.querySelector("#ex53").addEventListener('click', function() {
    const span53 = document.querySelector('#span53');
    if (span53.innerText==="Delicious") span53.innerText = "Disgusting"
    else span53.innerText = "Delicious"
})

// Exercise 54
document.querySelector("#ex54").addEventListener('click', function() {
    let image = document.querySelector('#egg');
    const urlEgg = "https://www.flaticon.com/svg/static/icons/svg/528/528166.svg";
    const urlChicken = "https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg";

    if (image.src === urlEgg) {
        image.src =  urlChicken;
        image.alt = 'chicken';
    }
    else {
        image.src =  urlEgg;
        image.alt = 'egg';
    }
})

// Exercise 55
document.querySelector("#trees").style.textAlign = "center";
const img = document.querySelector("#tree");
img.style.width = "150px";
img.style.borderRadius = '50%';

// Exercise 56
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; 

let spans = document.querySelectorAll("span");
for (let i=0; i<spans.length; i++) { 
    spans[i].style.color = colors[i]
}

// Exercise 57
document.querySelector("#ex57").addEventListener('click', function() {
    const lis = document.querySelectorAll("li");
    for (let li of lis) {
        li.classList.toggle('highlight');
    }
})


// Exercise 58
for (let i=0; i<100; i++) {
    let button = document.createElement('button');
    button.innerText = 'Click me!';
    document.querySelector("#container").appendChild(button);
    button.addEventListener('click', function() {
        const randomColor = generateRandomRGBColor();
        document.body.style.background = randomColor;
        this.style.background = randomColor;
    })
}

function generateRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

// Exercise 60
const h60 = document.querySelector("#ex60");
const hello = document.querySelector("#hello");
hello.addEventListener("click", () => {
    console.log('hello');
    h60.innerText = 'Hello!';
    document.body.style.background = generateRandomRGBColor();
    hello.style.background = generateRandomRGBColor();
    document.querySelector(".toggleVisibility").classList.toggle('hidden');
})
const goodbye = document.querySelector("#goodbye");
goodbye.addEventListener("click", () => {
    console.log('goodbye');
    h60.innerText = 'Goodbye!';
    document.body.style.background = generateRandomRGBColor();
    goodbye.style.background = generateRandomRGBColor();
    document.querySelector(".toggleVisibility").classList.toggle('hidden');
});

// Exercise 61
const form = document.querySelector("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // alert(form.elements.product.value);
    const newLi = document.createElement('li');
    let qty = form.elements.qty;
    let product = form.elements.product;
    if (qty.value < 0) {
        alert("Please enter a positive number");
        qty.value = '';
    }
    if (product.value || product.qty) {
        newLi.innerText = qty.value + ' ' + product.value;
        document.querySelector("#list").appendChild(newLi);
    }
    qty.value = '';
    product.value = '';
})

// Exercise 62
const input = document.querySelector('#username');

input.addEventListener('input', function() {
    const h62 = document.querySelector('#ex62');
    h62.innerText = 'Welcome, ' + input.value;
    if (!input.value) h62.innerText = 'Enter Your Username';
})