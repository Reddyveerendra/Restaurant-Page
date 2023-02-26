function header() {
    const header = document.createElement("div");
    header.style = "display: flex; justify-content: space-around;background-color: #7b674d; color: aliceblue;";
    function createHeader(text) {
        const h2 = document.createElement("h2");
        h2.textContent = text;
        h2.classList = "header-item";
        h2.id = text;
        return h2;
    }
    header.appendChild(createHeader("Home"));
    header.appendChild(createHeader("Menu"));
    header.appendChild(createHeader("About"));
    return header;
}
export { header };