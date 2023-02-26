import { Home } from "./Home";
import { menu } from "./menu";
import { about } from "./about";
function main(a) {
    if ("Home" == a) {
        return Home();
    }
    else if ("Menu" == a) {
        return menu();
    }
    else {
        return about();
    }
}
export { main };