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
        document.body.innerHTML += `<p style="font-size:34px">my games</p>`
        document.body.innerHTML += `<button onclick="window.open('https://www.roblox.com/games/15954053813/Tonk-Madness')">Tonk Madness</button>`
        document.body.innerHTML += `<button onclick="window.open('https://www.roblox.com/games/111709592979269/MasterTonkys-Towering-Tomfoolery')">MasterTonky's Towering Tomfoolery</button>`
        document.body.innerHTML += `<button onclick="window.open('https://www.roblox.com/games/15770433551/Superbuffed-Tower-of-Hell')">Superbuffed Tower of Hell</button>`

        document.body.innerHTML += `<p style="font-size:34px">my towers</p>`
        document.body.innerHTML += `<p style="color:rgba(0,0,0,0.4)">keep in mind that most of these are not playable thx to the stupid roblox maturity label update</p>`
        let towers = {
            "LSPoTOL": ["Literally Salt Pillar of True Omega Length", "bottom easy", [117, 243, 71], "https://www.roblox.com/games/79414069366574/LITERALLY-Salt-Pillar-Of-True-Omega-Length", false],
            "MBAT": ["Must Be A Tower", "peak easy", [117, 243, 71], "https://www.roblox.com/games/129316993962474/Must-Be-A-Tower", false],
            "ToS:C": ["Tower of Stairs: Classic", "peak easy", [117, 243, 71], "https://www.roblox.com/games/84919296094673/Tower-of-Stairs-Classic", true],
            "CBAT": ["Can't Be A Tower", "mid medium", [255, 254, 0], "https://www.roblox.com/games/18923385860/Tiny-Tower", false],
            "ET": ["Easy Tower", "mid-high medium", [255, 254, 0], "https://www.roblox.com/games/93436120874613/Easy-Tower", false],
            "ToIBOWTV": ["Tower of I Became One With The Void", "high medium", [255, 254, 0], "https://www.roblox.com/games/123655336164654/Tower-of-I-Became-One-With-The-Void", false],
            "ToS": ["Tower of Stairs", "peak medium", [255, 254, 0], "https://www.roblox.com/games/18991411794/Tower-of-Stairs", false],
            "ToSC": ["Tower of Slight Confusion", "low hard", [253, 124, 0], "https://www.roblox.com/games/92162459492655/Tower-of-Slight-Confusion", true],
            "ToCS": ["Tower of Cliff Scaling", "low hard", [253, 124, 0], "https://www.roblox.com/games/18936237284/Tower-of-Cliff-Scaling", false],
            "SoFS": ["Steeple of Final Stretch", "high hard", [253, 124, 0], "https://www.roblox.com/games/104629248891208/Steeple-of-Final-Stretch", false],
            "SoBiaH": ["Steeple of Being in a Hurry", "bottom difficult", [255, 50, 50], "https://www.roblox.com/games/139955416730004/Steeple-of-Being-In-a-Hurry", false],
            "ToNK": ["Tower of No Killjoys", "mid-high difficult", [255, 50, 50], "https://www.roblox.com/games/129779678908565/Tower-of-No-Killjoys", false],
            "SoFL": ["Steeple of Feeling Lazy", "bottom challenging", [160, 0, 0], "https://www.roblox.com/games/84626206204662/Steeple-of-Feeling-Lazy", false],
            "ToC": ["Tower of Cancer", "high-peak insane", [0, 0, 255], "https://www.roblox.com/games/18894068349/Tower-of-Cancer", true],
        }

        for(tower in towers) {
            let towerstats = towers[tower]
            let colors = towerstats[2]
            let playable
            if(towerstats[4] === true){
                playable = "playable!"
            } else {
                playable = "unplayable."
            }
            document.body.innerHTML += `<p style="color:rgb(${colors[0]},${colors[1]},${colors[2]})">${tower} - ${towerstats[0]} - ${towerstats[1]} <button onclick="window.open('${towerstats[3]}')">check (${playable})</button></p>`
        }
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






























