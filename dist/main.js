const content = document.querySelector("#content");
const body = document.querySelector("body");
let header = document.createElement("header");
function foot() {
    content.appendChild(footer);
    console.log("foot");
}
let footer = document.createElement("footer");
let fp = document.createElement("a");
fp.textContent = "Developed with ♥ by Reddy Veerendra"
fp.href = "https://github.com/Reddyveerendra";
footer.appendChild(fp);

footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.padding = "6%"
body.style.margin = "0%";
body.style.background = "light-black";
body.style.padding = "0%";
function headerSection(name) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = name;
    p.className = "items";
    p.id = `${name}`;
    p.style.margin = "0%"
    p.style.padding = "10%"
    div.appendChild(p);
    header.appendChild(div);
    div.style.textAlign = "center";
    return header;
}
header.style.display = "grid";
header.style.gridTemplateColumns = "1fr 1fr 1fr"
let title = document.createElement("h1");
title.textContent = "Food For A Reason";
title.style.textAlign = "center";
content.appendChild(title);
content.appendChild(headerSection("Home"));
content.appendChild(headerSection("menu"));
content.appendChild(headerSection("About"));
const items = document.querySelectorAll(".items");
function handleClick(e) {
    if ("Home" == e.target.id) {
        Home();
    }
    else if ("menu" == e.target.id) {
        menu();
    }
    else {
        About();
    }
}
function Home() {
    console.log("hi its home");
    let p1 = document.createElement("p");
    let img = document.createElement("img");
    let main = document.createElement("main");
    let p2 = document.createElement("p");
    p1.textContent = "The Pickle is a casual breakfast and lunch cafe, ideal for enjoying food, conversation, and work. The space is divided into three areas, one that accomodates larger groups, another for four diners and less, and then small cafe tables with outlets."
    p2.textContent = "All of our fruits and vegetables are sourced from local farmers. We compost our scraps. The Pickle is a vegan establishment. We do not use any ingredients from animals"
    img.src = \images\menu.jpg;
    content.appendChild(main);
    main.appendChild(p1);
    main.appendChild(img);
    main.appendChild(p2);
    foot();
}
function menu() {
    console.log("hi its menu");
    foot();
}
function About() {
    console.log("hi its about");
    foot();
}
function itemOn(e) {
    e.target.style.background = "#FEF0E4";
}
function itemOut(e) {
    e.target.style.background = "";
}
items.forEach(item => item.addEventListener('mousemove', itemOn));
items.forEach(item => item.addEventListener('mouseout', itemOut));
items.forEach(item => item.addEventListener('click', handleClick));