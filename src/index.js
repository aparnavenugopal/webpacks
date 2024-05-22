import _ from "lodash";
// import "./index.css";
import logo from '../assests/webpack_logo.png'
import './clearButton';
import style from "./index.scss";
// import '../assests/fonts/Cedarville_Cursive.ttf';

console.log(style);
const btn1 = document.getElementById("button1");
const logoEl = document.getElementById("logo");

btn1.addEventListener("click", function(){
    const el = document.getElementById("header");
    el.innerHTML = "hey i have updated";
    // e1.classList.add([style.header]);

    const listItems = ["Apple", "orange", "banana"];
    const ul = document.getElementById("shoppinglist");
    _.forEach(listItems, function(item){
        const tempEl = document.createElement("li");
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    })
})

btn1.classList.add("button");
logoEl.src = logo;
// const buttonclicked = () => {
   
// }