const content = document.getElementById("content");
const title = document.createElement("h1");
const header = document.createElement("header");
const main = document.createElement("main");
var footer = document.createElement("footer");
const body = document.querySelector("body");
body.style.margin = "0%";
body.style.color = "white";
body.style.backgroundColor = "black"
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
title.textContent = "Biryani Junction";
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
    e.target.style.color = "brown"
    console.log("hi");
}
function itemOut(e) {
    e.target.style.background = "";
    e.target.style.color = "";
}
header.style.display = "grid";
header.style.gridTemplateColumns = "1fr 1fr 1fr"
headerSection("Home");
headerSection("menu");
headerSection("About");
header.style.padding = "18%";
header.style.paddingTop = "1%";
header.style.paddingBottom = "1%";
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
handleClick("Home");
function value(e) {
    let a = e.target.id;
    console.log(a)
    handleClick(a);
}
/* HOME */

function Home() {
    const h2 = document.createElement("h2");
    h2.textContent = "Welcome To Biryani Junction";
    const p1 = document.createElement("p");
    p1.textContent = "Authentic flavours | Localy sourced";
    const p2 = document.createElement("p");
    p2.textContent = "At Biryani Junction, we believe that dining should be more than just a meal - it should be an adventure. Come explore our menu and discover something new.";
    const img = document.createElement("img");
    img.style.height = "100%";
    img.style.width = "100%";
    h2.style.textAlign = "center";
    p1.style.textAlign = "center"
    img.src = "https://raw.githubusercontent.com/Reddyveerendra/Restaurant-Page/main/images/home.jpg";
    main.appendChild(h2);
    main.appendChild(p1);
    main.appendChild(p2);
    main.appendChild(img);
    main.style.display = "flex";
    main.style.flexDirection = "column"
    main.style.padding = "18%";
    main.style.paddingTop = "5%";
    main.style.paddingBottom = "5%";
}
/* menu */
function menu() {
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    const div5 = document.createElement("div");
    const div6 = document.createElement("div");
    const p1 = document.createElement("p");
    const img1 = document.createElement("img");
    p1.textContent = "Chicken Biryani - 150rs";
    img1.src = "https://raw.githubusercontent.com/Reddyveerendra/Restaurant-Page/main/images/Chicken-Biryani.jpg";
    img1.style.height = "75px";
    img1.style.width = "75px";
    div1.style.display = "flex";
    div1.appendChild(img1);
    div1.appendChild(p1);
    div1.style.flexDirection = "column";
    div1.style.width = "200px";
    const p2 = document.createElement("p");
    const img2 = document.createElement("img");
    p2.textContent = "Mutton Biryani - 220rs"
    img2.src = "https://raw.githubusercontent.com/Reddyveerendra/Restaurant-Page/main/images/Mutton-Biryani.jpg"
    img2.style.height = "75px";
    img2.style.width = "75px";
    div2.style.display = "flex";
    div2.appendChild(img2);
    div2.appendChild(p2);
    div2.style.width = "200px";
    div2.style.flexDirection = "column";
    const p3 = document.createElement("p");
    const img3 = document.createElement("img");
    p3.textContent = "Egg Biryani - 110rs"
    img3.src = "https://raw.githubusercontent.com/Reddyveerendra/Restaurant-Page/main/images/egg%20Biryani.jpg"
    img3.style.height = "75px";
    img3.style.width = "75px";
    div3.style.display = "flex";
    div3.appendChild(img3);
    div3.appendChild(p3);
    div3.style.width = "200px";
    div3.style.flexDirection = "column";
    const p4 = document.createElement("p");
    const img4 = document.createElement("img");
    p4.textContent = "Fish Biryani - 180rs";
    img4.src = "https://raw.githubusercontent.com/Reddyveerendra/Restaurant-Page/main/images/Fish-Biryani.jpg";
    img4.style.height = "75px";
    img4.style.width = "75px";
    div4.style.display = "flex";
    div4.appendChild(img4);
    div4.appendChild(p4);
    div4.style.width = "200px";
    div4.style.flexDirection = "column";
    const p5 = document.createElement("p");
    const img5 = document.createElement("img");
    p5.textContent = "Paneer Biryani - 150rs";
    img5.src = "https://raw.githubusercontent.com/Reddyveerendra/Restaurant-Page/main/images/Paneer%20Biryani.jpg";
    img5.style.height = "75px";
    img5.style.width = "75px";
    div5.style.display = "flex";
    div5.appendChild(img5);
    div5.appendChild(p5);
    div5.style.width = "200px";
    div5.style.flexDirection = "column";
    const p6 = document.createElement("p");
    const img6 = document.createElement("img");
    p6.textContent = "Vegetable Biryani - 90rs";
    img6.src = "https://raw.githubusercontent.com/Reddyveerendra/Restaurant-Page/main/images/Vegetable%20Biryan.jpg";
    img6.style.height = "75px";
    img6.style.width = "75px";
    div6.style.display = "flex";
    div6.style.flexDirection = "column";
    div6.appendChild(img6);
    div6.appendChild(p6);
    div6.style.width = "200px";
    content.appendChild(main);
    main.appendChild(div1);
    main.appendChild(div2);
    main.appendChild(div3);
    main.appendChild(div4);
    main.appendChild(div5);
    main.appendChild(div6);
    div6.style.border = "orange solid 3px"
    div6.style.alignItems = "center";
    div5.style.border = "orange solid 3px"
    div5.style.alignItems = "center";
    div4.style.border = "orange solid 3px"
    div4.style.alignItems = "center";
    div3.style.border = "orange solid 3px"
    div3.style.alignItems = "center";
    div2.style.border = "orange solid 3px"
    div2.style.alignItems = "center";
    div1.style.border = "orange solid 3px"
    div1.style.alignItems = "center";
    main.style.justifyContent = "center";
    main.style.position = "center";
    main.style.gap = "20px";
}
/* about */
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
footer_p.textContent = "Developed with ♥ by Reddy Veerendra"
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