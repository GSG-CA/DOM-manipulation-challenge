// const toggleClass = () =>{
//   document.querySelector(".header").classList.toggle("toogleHeader");
// };
// toggleClass(); //uncomment me to test

// 2- Select the section with an id of container without using querySelector,
// and style the font with blue color
// const containerstyle = () => {
//   document.getElementById("container").style.color = "blue";
// };
// containerstyle(); //uncomment me to test

// 3 - Select the nav with a class of "firstNav" and style the font with fontsize =20px.

const italicSize = () => {
  document.getElementsByClassName("firstNav")[0].style.fontStyle = "italic";
};
italicSize();

// OR

// document.querySelectorAll(".firstNav")

// 4 - Select a list item with a class of 'contact', but only the list item inside of the secondList nav,
// and style it with background color yellow

const backgroundList = () => {
  document.querySelector(".secondList .contact").style.backgroundColor =
    "yellow";
};

backgroundList();

// 5- Create a new li element , give it the text 'project and append it to the fisrtList .
const newList = () => {
  let newLi = document.createElement("li");

  newLi.innerText = "project";

  document.querySelector(".firstNav").appendChild(newLi);
};
newList();

// 6 - Loop over all of the li elements inside the secondList and give them a background color of "green".
const brownColor = () => {
  let liInsidesecondList = document.querySelectorAll(".secondList li");
  for (let i = 0; i < liInsidesecondList.length; i++) {
    liInsidesecondList[i].style.color = "brown";
  }
};
brownColor();

// 7- Create p eleement with any text and abbend it to the footer
const footer = () => {
  let p = document.createElement("p");
  p.innerText = "kkkkk";
  document.querySelector(".footer").appendChild(p);
};
footer();
// 8- Remove the div with a class of footer.
const removeFooter = () => {
  let footer = document.querySelector(".footer");
  footer.remove();
};
removeFooter();
