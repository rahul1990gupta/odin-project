import { loadAbout  } from "./about.js";
import { loadMenu } from "./menu.js";
import { loadHome } from "./home.js";

document.getElementById("home").addEventListener("click", loadHome);

document.getElementById("menu").addEventListener("click", loadMenu);


document.getElementById("about").addEventListener("click", loadAbout);

