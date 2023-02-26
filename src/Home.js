function Home() {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const img = document.createElement("img");
    h2.textContent = "Welcome To Biryani Junction";
    h2.style = "text-align: center;";
    p1.style = "text-align: center;";
    p1.textContent = "Authentic flavours | Localy sourced";
    p2.textContent = "At Biryani Junction, we believe that dining should be more than just a meal - it should be an adventure. Come explore our menu and discover something new.";
    img.src = "https://raw.githubusercontent.com/Reddyveerendra/Restaurant-Page/main/images/home.jpg";
    img.alt = "home page image";
    img.style = "height: 100%; width: 100%;";
    div.appendChild(h2);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(img);
    div.style = "color:white; background:black;"
    div.style = "border: 1px solid black; display: flex; flex-direction: column; padding: 5% 18%; justify-content: center; gap: 20px;";
    return div;
}
export { Home };