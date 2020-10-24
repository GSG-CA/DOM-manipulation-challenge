// 1 - Write a function which, if the h2 element  has the class "header",
// it will be removed; otherwise the class "toogleHeader" is added.

const toggleClass = () => {
  document.querySelector(".header").classList.toggle("toogleHeader");
};
toggleClass(); //uncomment me to test

// 2- Select the section with an id of container without using querySelector,
// and style the font with blue color

const styleContainer = () => {
  document.getElementById("container").style.color = "blue";
};
styleContainer(); //uncomment me to test

// 3 - Select the nav with a class of "firstNav" and style the font with italic fontStyle.

const styleItalic = () => {
  document.getElementsByClassName("firstNav")[0].style.fontStyle = "italic";
  // OR
  // document.querySelectorAll(".firstNav")
};
styleItalic(); //uncomment me to test

// 4 - Select a list item with a class of 'contact', but only the list item inside of the secondList nav,
// and style it with background color yellow

const backgroundList = () => {
  document.querySelector(".secondList .contact").style.backgroundColor =
    "yellow";
};

backgroundList(); //uncomment me to test

// 5- Create a new li element , give it the text 'project and append it to the fisrtList .
const newList = () => {
  let newLi = document.createElement("li");

  newLi.innerText = "project";

  document.querySelector(".firstNav").appendChild(newLi);
};
newList(); //uncomment me to test

// 6 - Loop over all of the li elements inside the secondList and give them a background color of "green".
const brownColor = () => {
  let lists = document.querySelectorAll(".secondList li");
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.color = "brown";
  }
};
brownColor(); //uncomment me to test

// 7- Create p eleement with any text and append it to the footer
const addFooter = () => {
  let p = document.createElement("p");
  p.innerText = "Footer";
  document.querySelector(".footer").appendChild(p);
};
addFooter(); //uncomment me to test

// 8- Remove the div with a class of footer.
const removeFooter = () => {
  let footer = document.querySelector(".footer").remove();
};
removeFooter(); //uncomment me to test
