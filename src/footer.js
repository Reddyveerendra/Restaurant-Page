function footer() {
    const footer = document.createElement("footer");
    footer.style = "height: 60px; text-align: center; padding: 6%; padding-top: 10%;padding-bottom: 3%; color: black; background-color: rgba(105, 105, 105, 0.861);";
    const a = document.createElement("a");
    a.href = "https://github.com/Reddyveerendra";
    a.style = "color: black; font-size: larger;";
    a.textContent = "Created by Reddy Veerendra";
    footer.appendChild(a);
    return footer;
}
export { footer };