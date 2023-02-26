
function title() {
    const title = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = "Biryani Point";
    h1.style = "text-align: center; padding: 6%; background-color: #2a5568; color: aliceblue; margin: 0%;";
    title.appendChild(h1);
    return title;
}
export { title };