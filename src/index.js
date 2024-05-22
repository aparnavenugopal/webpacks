import _ from "lodash";
// import "./index.css";
import './clearButton';
import style from "./index.css";

console.log(style);
const btn1 = document.getElementById("button1");

btn1.addEventListener("click", function(){
    const el = document.getElementById("header");
    el.innerHTML = "hey i have updated";

    const listItems = ["Apple", "orange", "banana"];
    const ul = document.getElementById("shoppinglist");
    _.forEach(listItems, function(item){
        const tempEl = document.createElement("li");
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    })
})

btn1.classList.add([style.button]);
// const buttonclicked = () => {
   
// }