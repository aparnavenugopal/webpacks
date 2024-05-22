import _ from "lodash";

const buttonclicked = () => {
    const el = document.getElementById("header");
    el.innerHTML = "hey i have updated";

    const listItems = ["Apple", "orange", "banana"];
    const ul = document.getElementById("shoppinglist");
    _.forEach(listItems, function(item){
        const tempEl = document.createElement("li");
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    })
}