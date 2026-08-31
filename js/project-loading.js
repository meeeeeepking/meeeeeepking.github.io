export async function ShowGameProjects(outDiv, num){
    let gameProjects = await(await fetch("../game-projects.json")).json();
    //reload game projects with the top 4 games in the json file
    outDiv.innerHTML = "";
    let gameCounter = 1
    if(num){
        for(let name in gameProjects){
            outDiv.innerHTML += CreateProjectString(name, gameProjects);
            if(gameCounter >= num){
                break;
            }
            else{
                gameCounter++;
            }
        }  
    }
    else{
        for(let name in gameProjects){
            outDiv.innerHTML += CreateProjectString(name, gameProjects);
        }
    }
    
}

export async function ShowOtherProjects(outDiv, num){
    let otherProjects = await(await fetch("../other-projects.json")).json();
    //reload other projects with the top 4 projects in the json file
    outDiv.innerHTML = "";
    let otherCounter = 1
    if(num){
        for(let name in otherProjects){
            outDiv.innerHTML += CreateProjectString(name, otherProjects);
            if(otherCounter >= num){
                break;
            }
            else{
                otherCounter++;
            }
        }
    }
    else{
        for(let name in otherProjects){
            outDiv.innerHTML += CreateProjectString(name, otherProjects);
        }
    }
    
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
    `
}