let topbarbuttons = {
    "home": "https://realmastertonky.github.io/site/",
    "your mother's home": "https://realmastertonky.github.io/site/",
    "my homework (real)": "https://docs.google.com/spreadsheets/d/1bxhj0Xtixkpo_BtzsnIg-qwLTA7qdb7Y6fursQjRZKM/edit?gid=737244206#gid=737244206",
}

function loadtopbar() {
    let topbar = document.createElement("div")
    topbar.className = "topbar"
    document.body.appendChild(topbar)

    for (let a in topbarbuttons) {
        topbar.innerHTML += `<button onclick="window.location.href='${topbarbuttons[a]}'">${a}</button>`
    }
}

let pages = {
    "https://realmastertonky.github.io/site/": function() {
        document.body.innerHTML += "<h1>i am beeve</h1>\nsteve*"
        document.title = "dermo!"
    }
}

function loadpage() {
    loadtopbar()
    let pagefunc = pages[document.URL]
    pagefunc()
}

document.addEventListener("DOMContentLoaded", function() {
    loadpage()
})




















