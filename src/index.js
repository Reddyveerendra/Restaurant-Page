import { main } from "./main";
import { title } from "./title";
import { header } from "./header";
import { footer } from "./footer";


const content = document.getElementById("content");
content.appendChild(title());
content.appendChild(header());
content.appendChild(main("About"));
content.appendChild(footer());

function itemOn(e) {
    e.target.style.background = "#FEF0E4";
    e.target.style.color = "brown"
}
function itemOut(e) {
    e.target.style.background = "";
    e.target.style.color = ""
}
function handleEvent(e) {
    content.removeChild(content.lastElementChild);
    content.removeChild(content.lastElementChild);
    content.appendChild(main(e.target.id));
    content.appendChild(footer());
}
content.style = "padding: 5%;";
const items = document.querySelectorAll(".header-item");
items.forEach(item => { item.addEventListener('mousemove', itemOn) });
items.forEach(item => { item.addEventListener('mouseout', itemOut) });
items.forEach(item => { item.addEventListener('click', handleEvent) });
export { content };