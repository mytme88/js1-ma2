// Question 1
const myFunctionExpression = () => {
  console.log("Hanne Petterteig");
};

myFunctionExpression();

// Question 2
const button = document.querySelector(".btn");
const callAfterButtonClick = () => {
  console.log("I was clicked");
};

button.addEventListener("click", callAfterButtonClick);

// Question 3
const input = document.querySelector("#firstName");

input.addEventListener("keydown", event => {
  console.log(event.key);
});

// Question 4
const tagButton = document.querySelector("button");
tagButton.addEventListener("mouseover", event => {
  tagButton.classList.add("hover");
});

// Question 5
tagButton.addEventListener("mouseout", event => {
  tagButton.classList.remove("hover");
});

// Question 6
const listItems = document.querySelectorAll("li");

let i = listItems.length;
while (i--) {
  listItems[i].addEventListener("mouseover", event =>
    console.log(event.target.dataset.animal)
  );
}

// Question 7
const animal = "cow";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;
  case "cow":
    console.log("Moo");
    break;
  case "bird":
    console.log("Tweet");
    break;
  default:
    console.log("Harrumph");
}

// Question 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(name => console.log(name));

// Question 9
let count = 0;
const timer = setInterval(() => {
  console.log("hello");
  count++;
  count === 6 && clearInterval(timer);
}, 500);

// Question 10
const myDiv = document.querySelector(".container");
setTimeout(() => {
  myDiv.innerHTML = "Text updated";
}, 2000);
