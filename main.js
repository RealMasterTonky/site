const topbarbuttons = {
    "home": "https://realmastertonky.github.io/site/",
    "your mother's home": "https://realmastertonky.github.io/site/",
    "my homework (real)": "https://docs.google.com/spreadsheets/d/1bxhj0Xtixkpo_BtzsnIg-qwLTA7qdb7Y6fursQjRZKM/edit?gid=737244206#gid=737244206",
}

function loadtopbar() {
    let topbar = document.createElement("div")
    topbar.className = "topbar"
    document.body.appendChild(topbar)

    for (let a in topbarbuttons) {
        let button = document.createElement("button")
        button.innerText = a
        button.className = `topbarbutton`
        topbar.appendChild(button)
    }

    topbarbuttons.querySelectorAll('topbarbutton').forEach(function(element){
        element.onclick=function(){alert('yo!')}                   
    })
}

const pages = {
    "https://realmastertonky.github.io/site/": function() {
        document.body.innerHTML += "<h1>i am beeve</h1>\nsteve*"
        document.title = "dermo!"
    }
}

function loadpage() {
    loadtopbar()
    const pagefunc = pages[document.URL]
    pagefunc()
}

document.addEventListener("DOMContentLoaded", function() { // how the hell does this work
    loadpage()
});
















