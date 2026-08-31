import { ShowGameProjects } from "./project-loading.js";

async function Main(){
    let gameProjectsDiv = document.querySelector(".project-container");
    await ShowGameProjects(gameProjectsDiv);
}

Main();