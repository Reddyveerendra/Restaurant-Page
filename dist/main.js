const content = document.getElementById("content");
const title = document.createElement("h1");
const header = document.createElement("header");
const main = document.createElement("main");
var footer = document.createElement("footer");
const body = document.querySelector("body");
body.style.margin = "0%";
main.id = "main";
content.appendChild(title);
content.appendChild(header);
content.appendChild(main);
title.style.border = "1px solid black";
header.style.border = "1px solid black";
main.style.border = "1px solid black";
content.appendChild(footer);
footer.style.border = "1px solid black";
/* TITLE */
title.textContent = "Food For A Reason";
title.style.textAlign = "center";
title.style.margin = "0%";
title.style.padding = "2%";

/* HEADER */
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
function itemOn(e) {
    e.target.style.background = "#FEF0E4";
    console.log("hi");
}
function itemOut(e) {
    e.target.style.background = "";
}
header.style.display = "grid";
header.style.gridTemplateColumns = "1fr 1fr 1fr"
headerSection("Home");
headerSection("menu");
headerSection("About");

/* MAIN */
function handleClick(a) {
    console.log(a);
    while (main.lastElementChild) {
        main.removeChild(main.lastElementChild);
    }
    content.removeChild(footer);
    if ("Home" == a) {
        Home();
    }
    else if ("menu" == a) {
        menu();
    }
    else {
        About();
    }
    content.appendChild(footer);
}
/* self call */
handleClick("About");
/* HOME */
function value(e) {
    let a = e.target.id;
    console.log(a)
    handleClick(a);
}
function Home() {
    let p1 = document.createElement("p");
    let img = document.createElement("img");
    let p2 = document.createElement("p");
    p1.textContent = "The Pickle is a casual breakfast and lunch cafe, ideal for enjoying food, conversation, and work. The space is divided into three areas, one that accomodates larger groups, another for four diners and less, and then small cafe tables with outlets."
    p2.textContent = "All of our fruits and vegetables are sourced from local farmers. We compost our scraps. The Pickle is a vegan establishment. We do not use any ingredients from animals"
    img.src = "https://raw.githubusercontent.com/Reddyveerendra/Restaurant-Page/main/images/menu.jpg";
    content.appendChild(main);
    main.appendChild(p1);
    main.appendChild(img);
    main.appendChild(p2);
    const home = document.getElementById("Home");
    home.style.background = "red";
}
function menu() {
    let p1 = document.createElement("p");
    let img = document.createElement("img");
    let p2 = document.createElement("p");
    p1.textContent = "The Pickle is a casual breakfast and lunch cafe, ideal for enjoying food, conversation, and work. The space is divided into three areas, one that accomodates larger groups, another for four diners and less, and then small cafe tables with outlets."
    p2.textContent = "All of our fruits and vegetables are sourced from local farmers. We compost our scraps. The Pickle is a vegan establishment. We do not use any ingredients from animals"
    img.src = "https://www.theworlds50best.com/discovery/filestore/jpg/Pages-Paris-France-02.jpg";
    content.appendChild(main);
    main.appendChild(p1);
    main.appendChild(img);
    main.appendChild(p2);
    const home = document.getElementById("menu");
    home.style.background = "red";
}
function About() {
    const h2 = document.createElement("h2");
    h2.textContent = "About Us";
    const div = document.createElement("div");
    const div3 = document.createElement("div");
    const div31 = document.createElement("div");
    const div32 = document.createElement("div");
    const map = document.createElement("iframe");
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.4488642381375!2d79.06438979999997!3d13.197111800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad5dcb4a93efff%3A0xc50ecf2b80fd0a96!2sCaf%C3%A9%20Coffee%20Day!5e0!3m2!1sen!2sin!4v1677247556291!5m2!1sen!2sin";
    map.style.height = "200px";
    map.style.width = "250px";
    div31.appendChild(map);
    div3.style.justifyContent = "space-around"
    const contact = document.createElement("h3");
    contact.textContent = "contact";
    const email = document.createElement("p");
    email.textContent = "restaurant212323@gmail.com";
    const phone = document.createElement("p");
    phone.textContent = "1234567890";
    const time = document.createElement("p");
    time.textContent = " Everyday from 10am - 11pm";
    div32.appendChild(contact);
    div32.appendChild(email);
    div32.appendChild(phone);
    div32.appendChild(time);
    div3.appendChild(div32);
    div3.style.display = "flex";
    div.style.display = "grid";
    div.style.gridTemplateColumns = "1fr 1fr";
    const h3 = document.createElement("h3");
    h3.textContent = "Why Choose Us?";
    let p1 = document.createElement("p");
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    const div2 = document.createElement("div");
    div2.style.display = "grid";
    div2.style.gridTemplateRows = "1fr 1fr"
    p1.textContent = "Looking for a delicious dining experience in a comfortable and welcoming atmosphere? Look no further than our restaurant! Our menu features a wide variety of dishes, ranging from classic comfort foods to unique and flavorful creations that are sure to satisfy any palate. All of our dishes are made with fresh, high-quality ingredients, and we take pride in offering a dining experience that is both delicious and affordable. Whether you're looking for a romantic night out, a family dinner, or a casual lunch with friends, our restaurant is the perfect destination.";
    img1.src = "https://raw.githubusercontent.com/Reddyveerendra/Restaurant-Page/main/images/interior.jpg";
    img2.src = "https://raw.githubusercontent.com/Reddyveerendra/Restaurant-Page/main/images/chef.jpg";
    img3.src = "https://raw.githubusercontent.com/Reddyveerendra/Restaurant-Page/main/images/dishes.jpg";
    p2.textContent = "Welcome to our restaurant, where we strive to provide our customers with an unforgettable dining experience. Our menu features a wide range of delicious dishes, prepared with the freshest ingredients and cooked to perfection. We specialize in [insert type of cuisine], but also offer a variety of options to suit all tastes and dietary requirements.";
    p3.textContent = "At our restaurant, we believe that great food should be accompanied by exceptional service and a warm, inviting atmosphere. Our knowledgeable staff are passionate about food and are always on hand to provide recommendations and ensure that your dining experience is as enjoyable as possible. Whether you are looking for a romantic dinner for two, a family meal, or a special occasion, we are dedicated to providing you with an unforgettable dining experience that will keep you coming back for more. So why not join us today and discover the delights of our restaurant for yourself";
    content.appendChild(main);
    main.appendChild(h2);
    main.appendChild(h3);
    main.appendChild(p1);
    main.appendChild(div);
    div.appendChild(img1);
    div.appendChild(div2);
    div2.appendChild(img2);
    div2.appendChild(img3);
    main.appendChild(p2);
    main.appendChild(p3);
    main.appendChild(div3)
    const home = document.getElementById("About");
    home.style.background = "red";
    h2.style.textAlign = "center";
    img1.style.height = "400px";
    img2.style.height = "200px";
    img3.style.height = "200px";
    img1.style.width = "100%";
    img2.style.width = "100%";
    img3.style.width = "100%";
    img2.style.height = "200px";
    img3.style.height = "200px";

    div3.appendChild(div31);
}

/* MENU */
/* ABOUT */

/* FOOTER */

let footer_p = document.createElement("a");
footer_p.textContent = "Developed with ♥ by Reddy akshaya"
footer_p.href = "https://github.com/Reddyveerendra";
footer.appendChild(footer_p);
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.padding = "6%"

/* Events */
const items = document.querySelectorAll(".items");
items.forEach(item => item.addEventListener('mousemove', itemOn));
items.forEach(item => item.addEventListener('mouseout', itemOut));
items.forEach(item => item.addEventListener('click', value));
/* self call */