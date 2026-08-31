import { ShowOtherProjects } from "./project-loading.js";

async function Main(){
    let gameProjectsDiv = document.querySelector(".project-container");
    await ShowOtherProjects(gameProjectsDiv);
}

Main();