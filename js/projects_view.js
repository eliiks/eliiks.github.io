project_div = document.getElementById("projets")
view_more_button = document.getElementById("view_more_button")
view_more = false;

for (let i = 3 ; i < project_div.children.length ; i++){
    project_div.children[i].classList.add("hidden")
}

view_more_button.addEventListener("click", () => {
    view_more = !view_more;
    for (let i = 3 ; i < project_div.children.length ; i++){
        project_div.children[i].classList.toggle("hidden")
    }
    if(view_more){
        view_more_button.innerHTML = "Voir moins de projets"
    }else{
        view_more_button.innerHTML = "Voir plus de projets"
    }
    
})