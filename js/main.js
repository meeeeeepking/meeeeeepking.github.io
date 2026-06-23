let gameProjectsDiv = document.querySelector("#game-projects .project-container");
let gameProjectButtonTop = document.querySelector("#game-project-button-top");
let gameProjectButtonBottom = document.querySelector("#game-project-button-bottom");

let gameProjects

let otherProjectsDiv = document.querySelector("#other-projects .project-container");
let otherProjectButtonTop = document.querySelector("#other-project-button-top");
let otherProjectButtonBottom = document.querySelector("#other-project-button-bottom");

let otherProjects

async function Setup(){
    gameProjects = await(await fetch("../game-projects.json")).json();
    otherProjects = await(await fetch("../other-projects.json")).json();
    
    gameProjectButtonBottom.addEventListener("click", ShowMoreGames);
    otherProjectButtonBottom.addEventListener("click", ShowMoreOther)
    ShowLessGames()
    ShowLessOther()

    if(Object.keys(gameProjects).length <= 4){
        gameProjectButtonBottom.remove()
        gameProjectButtonTop.remove()
    }
    if(Object.keys(otherProjects).length <= 4){
        otherProjectButtonBottom.remove()
        otherProjectButtonTop.remove()
    }
}

function ShowMoreGames(){
    //reload game projects with all games in the json file
    gameProjectsDiv.innerHTML = "";

    for(let name in gameProjects){
        gameProjectsDiv.innerHTML += CreateProjectString(name, gameProjects)
    }

    //change buttons
    gameProjectButtonBottom.innerHTML = "Show Less";
    gameProjectButtonTop.innerHTML = "Show Less";
    gameProjectButtonBottom.removeEventListener("click", ShowMoreGames);
    gameProjectButtonBottom.addEventListener("click", ShowLessGames);
    gameProjectButtonTop.addEventListener("click", ShowLessGames);
}

function ShowLessGames(){
    //reload game projects with the top 4 games in the json file
    gameProjectsDiv.innerHTML = "";
    let gameCounter = 0

    for(let name in gameProjects){
        gameProjectsDiv.innerHTML += CreateProjectString(name, gameProjects);
        if(gameCounter >= 3){
            break;
        }
        else{
            gameCounter++;
        }
    }

    //change buttons
    gameProjectButtonBottom.innerHTML = "Show More";
    gameProjectButtonTop.innerHTML = "";
    gameProjectButtonBottom.removeEventListener("click", ShowLessGames);
    gameProjectButtonTop.removeEventListener("click", ShowLessGames);
    gameProjectButtonBottom.addEventListener("click", ShowMoreGames);
}

function ShowMoreOther(){
    //reload other projects with all projects in the json file
    otherProjectsDiv.innerHTML = "";

    for(let name in otherProjects){
        otherProjectsDiv.innerHTML += CreateProjectString(name, otherProjects);
    }

    //change buttons
    otherProjectButtonBottom.innerHTML = "Show Less";
    otherProjectButtonTop.innerHTML = "Show Less";
    otherProjectButtonBottom.removeEventListener("click", ShowMoreOther);
    otherProjectButtonBottom.addEventListener("click", ShowLessOther);
    otherProjectButtonTop.addEventListener("click", ShowLessOther);
}

function ShowLessOther(){
    //reload other projects with the top 4 projects in the json file
    otherProjectsDiv.innerHTML = "";
    let otherCounter = 0

    for(let name in otherProjects){
        otherProjectsDiv.innerHTML += CreateProjectString(name, otherProjects);
        if(otherCounter >= 3){
            break;
        }
        else{
            otherCounter++;
        }
    }

    //change buttons
    otherProjectButtonBottom.innerHTML = "Show More";
    otherProjectButtonTop.innerHTML = "";
    otherProjectButtonBottom.removeEventListener("click", ShowLessOther);
    otherProjectButtonTop.removeEventListener("click", ShowLessOther);
    otherProjectButtonBottom.addEventListener("click", ShowMoreOther);
}

function CreateProjectString(name, projectsObject){
    return `
    <div class="project">
        <img src="${projectsObject[name].contentLink}" alt="image of ${name}">
        <div>
            <h3><a href="${projectsObject[name].siteLink}">${name}</a></h3>
            <p>Role: ${projectsObject[name].role}</p>
            <p>${projectsObject[name].description}</p>
        </div>
    </div>
    `;
}

Setup()