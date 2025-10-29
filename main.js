let topbarbuttons = {
    "home": "https://realmastertonky.github.io/site/",
    "my artworks": "https://realmastertonky.github.io/site/artworks",
    "roblox related stuff": "https://realmastertonky.github.io/site/roblox",
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
        document.body.innerHTML += "<h1>home</h1>"
        document.body.innerHTML += "<p>welcome to my website! for now it's about showing my things & creations</p>"
        document.body.innerHTML += "<p>so yeah, feel free to explore things here</p>"
    },
    "https://realmastertonky.github.io/site/roblox": function() {
        document.body.innerHTML += "<h1>roblox related stuff</h1>"
        document.body.innerHTML += `<p style="font-size:34px">my games</p><br>`
        document.body.innerHTML += `<button onclick="window.open('https://www.roblox.com/games/15954053813/Tonk-Madness')">Tonk Madness</button>`
        document.body.innerHTML += `<button onclick="window.open('https://www.roblox.com/games/111709592979269/MasterTonkys-Towering-Tomfoolery')">MasterTonky's Towering Tomfoolery</button>`
        document.body.innerHTML += `<button onclick="window.open('https://www.roblox.com/games/15770433551/Superbuffed-Tower-of-Hell')">Superbuffed Tower of Hell</button>`

        
    },
}

function loadpage() {
    loadtopbar()
    let pagefunc = pages[document.URL]
    pagefunc()
}

document.addEventListener("DOMContentLoaded", function() {
    loadpage()
})


























