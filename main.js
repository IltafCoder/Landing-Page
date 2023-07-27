
document.addEventListener("DOMContentLoaded", function() {


    let sections = Array.from(document.getElementsByTagName("section"))

    sections.forEach(function(element){
        element.addEventListener("click", hideMenuBar)
    })
})

function showMenuBar () {
    let x = document.getElementsByClassName("menu-bar")
    x[0].style.display = "flex"
}

function hideMenuBar () {

    let x = document.getElementsByClassName("menu-bar")
    x[0].style.display = "none"
}
