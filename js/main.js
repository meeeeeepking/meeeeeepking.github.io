import { ShowGameProjects, ShowOtherProjects } from "./project-loading.js";

function Main(){
    let gameProjectsDiv = document.querySelector("#game-projects .project-container");
    let otherProjectsDiv = document.querySelector("#other-projects .project-container");

    ShowGameProjects(gameProjectsDiv,4);
    ShowOtherProjects(otherProjectsDiv,4);
}

Main();