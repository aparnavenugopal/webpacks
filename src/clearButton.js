const el = document.createElement("button");

el.innerHTML="clear";
el.onclick = function(){
    alert("clear clicked");
}
document.body.appendChild(el);