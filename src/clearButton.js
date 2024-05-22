// import style from './clearButton.css';

const el = document.createElement("button");



el.innerHTML="clear";
el.classList.add("button");
el.onclick = function(){
    alert("clear clicked");
}
document.body.appendChild(el);