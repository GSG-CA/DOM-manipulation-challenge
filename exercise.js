/*
Write a function which, if the 'h2' element  has the class "header",
it will be removed; otherwise the class "header" is added.
*/
const toggleClass = () => {
  document.querySelector(".header").classList.toggle("header");
};
toggleClass(); //uncomment me to test

/*
Select the section with an id of 'container' without using querySelector,
and style the font with 'blue' color
*/

const styleContainer = () => {
  document.getElementById("container").style.color = "blue";
};
// styleContainer(); //uncomment me to test

// Select the 'nav' with a class of "firstNav" and style the font with 'italic' fontStyle.
const styleItalic = () => {
  document.getElementsByClassName("firstNav")[0].style.fontStyle = "italic";
  // OR
  // document.querySelector(".firstNav").style.fontStyle = "italic";
};
styleItalic(); //uncomment me to test

/*
Select a list item with a class of 'contact', but only the list item inside of the 'secondList' nav,
and style it with background color 'yellow'
*/

const backgroundList = () => {
  document.querySelector(".secondList .contact").style.backgroundColor =
    "yellow";
};
backgroundList(); //uncomment me to test

// Create a new 'li' element , give it the text 'project' and append it to the 'firstList' .
const newList = () => {
  const newLi = document.createElement("li");
  newLi.innerText = "project";
  document.querySelector(".firstNav").appendChild(newLi);
};
newList(); //uncomment me to test

// Loop over all of the 'li' elements inside the 'secondList' and give them a background color of "brown".
const brownColor = () => {
  const lists = document.querySelectorAll(".secondList li");
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.color = "brown";
  }
};
brownColor(); //uncomment me to test

/*
Write a function which returns the value in the `firstName` text input
*/
const getFirstNameValue = () => {
  return document.querySelector("input[name='firstName']").value;
};
getFirstNameValue(); //uncomment me to test

/*
Write a function which takes a string, `inputName`, and returns the value in the input which
has `inputName` as the name attribute
*/
const getValue = (inputName) => {
  return document.querySelector(`input[name=${inputName}]`).value;
};
getValue("email"); //uncomment me to test

/*
Write a function, `generateUl`, which takes an array of strings, and returns a
`ul` htmlElement containing `li` elements for each array element. Each `li'
should contain the value of the array element.
*/
const generateUl = (array) => {
  const ulNode = document.createElement("ul");
  array.forEach((ele) => {
    const liNode = document.createElement("li");
    liNode.textContent = ele;
    ulNode.appendChild(liNode);
  });

  return ulNode;
};
generateUl(["first element", "second one", "the last"]); //uncomment me to test

// Remove the 'div' with a class of 'footer'.
const removeFooter = () => {
  document.querySelector(".footer").remove();
};
removeFooter(); //uncomment me to test
