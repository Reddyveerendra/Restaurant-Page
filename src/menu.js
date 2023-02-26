function menu() {
    const div = document.createElement("div");
    function item(link, text) {
        const div = document.createElement("div");
        div.style = "display: flex;flex-direction: column;width: 200px;padding: 6%;border: 3px solid orange;align-items: center;";
        const img = document.createElement("img");
        img.style = "height: 75px; width: 75px;";
        const p = document.createElement("p");
        p.textContent = text;
        img.src = link;
        div.appendChild(img);
        div.appendChild(p);
        return div;
    }
    div.appendChild(item("https://raw.githubusercontent.com/Reddyveerendra/Restaurant-Page/main/images/Chicken-Biryani.jpg", "Chicken Biryani - 150rs"));
    div.appendChild(item("https://raw.githubusercontent.com/Reddyveerendra/Restaurant-Page/main/images/Mutton-Biryani.jpg", "Mutton Biryani - 220rs"));
    div.appendChild(item("https://raw.githubusercontent.com/Reddyveerendra/Restaurant-Page/main/images/egg%20Biryani.jpg", "Egg Biryani - 110rs"));
    div.appendChild(item("https://raw.githubusercontent.com/Reddyveerendra/Restaurant-Page/main/images/Fish-Biryani.jpg", "Fish Biryani - 180rs"));
    div.appendChild(item("https://raw.githubusercontent.com/Reddyveerendra/Restaurant-Page/main/images/Paneer%20Biryani.jpg", "Paneer Biryani - 150rs"));
    div.appendChild(item("https://raw.githubusercontent.com/Reddyveerendra/Restaurant-Page/main/images/Vegetable%20Biryan.jpg", "Vegetable Biryani - 90rs"));
    div.style = "border: 1px solid black; display: flex; flex-direction: column; padding: 5% 18%; align-items: center; gap: 20px;";
    return div;
}
export { menu };