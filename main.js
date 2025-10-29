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

        let towers = {
            "MFT": ["MEGA FUN TOWER", "unknown", [0,0,0], "https://www.roblox.com/games/18878983065/MEGA-FUN-TOWER", false],
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
            "ToOJ": ["Tower of Orange Juice", "low-mid challenging", [160, 0, 0], "https://www.roblox.com/games/137368525411272/Tower-of-Orange-Juice", false],
            "ToHE": ["Tower of High Exasperation", "high challenging", [160, 0, 0], "https://www.roblox.com/games/77336291350055/Tower-of-High-Exasperation", false],
            "SoH1KVC": ["Steeple of Hardcore 1K Visits Celebration", "challenging/intense", [93, 17, 23], "https://www.roblox.com/games/94563053585293/Steeple-of-Hardcore-1K-Visits-Celebration", false],
            "ToP!H!G.ITW!ICVMH.AIT,LP.L.R!BPI,IHTE.GN30MTTG!": ["Tower of People! Hurry! Get. In The Way! I'm Commiting Vehicular Manburger Helper! And It Tastes Like Pure. Liquid. Relief! Best Part Is, I'm Helping The Earth. Getting Negative 30 Miles To The Gallon!", "baseline intense", [25, 34, 45], "https://www.roblox.com/games/111532669293311/ToP-H-G-ITW-ICVMH-TLLR-BPI-IHTE-GN30MTTG", false],
            "ToFaC:U": ["Tower of Fun and Creativity: Ultimate", "bottom intense", [25, 34, 45], "https://www.roblox.com/games/18858512727/Tower-of-Fun-And-Creativity-Ultimate", false],
            "ToLR": ["Tower of Laptop Ripping", "bottom intense", [25, 34, 45], "https://www.roblox.com/games/119216713302382/Tower-of-Laptop-Ripping", false],
            "SoMM": ["Steeple of Mewing MAT", "low intense", [25, 34, 45], "https://www.roblox.com/games/123077848611740/Steeple-of-Mewing-MAT", false],
            "ToAUT": ["Tower of Annoying Unoriginal Trials", "mid intense", [25, 34, 45], "https://www.roblox.com/games/135187435093971/Tower-of-Unpleasant-Surprises", false],
            "QNS": ["Quick Neat Speedbuild", "high intense", [25, 34, 45], "https://www.roblox.com/games/112728301464577/Quick-Neat-Speedbuild", false],
            "ToU235": ["Tower of Uranium 235", "peak intense", [25, 34, 45], "https://www.roblox.com/games/115471466040829/Tower-of-Uranium-235", true],
            "ToMNC": ["Tower of MasterTonky Never Clear", "baseline remorseless", [200, 0, 200], "https://www.roblox.com/games/18942214044/ToMNC", false],
            "ToDJ": ["Tower of Diagonal Jumps", "bottom-low remorseless", [200, 0, 200], "https://www.roblox.com/games/81505714555490/Tower-of-Awkward-Jumps", false],
            "ToZ": ["Tower of Zitronda", "low remorseless", [200, 0, 200], "https://www.roblox.com/games/78940140938774/Tower-of-Zitronda", true],
            "ToWM": ["Tower of Wedgicular Manslaughter", "high remorseless", [200, 0, 200], "https://www.roblox.com/games/89583176822766/Tower-of-Wedgicular-Manslaughter", false],
            "SoUG": ["Steeple of Unfun GBJ", "peak remorseless", [200, 0, 200], "https://www.roblox.com/games/110278596870369/Steeple-of-Unfun-GBJ", true],
            "SoUG": ["Tower of Eternal Darkness", "peak remorseless", [200, 0, 200], "https://www.roblox.com/games/93392183780862/Tower-of-Eternal-Darkness", false],
            "DN:R": ["Deconfirmed Neat: Restored", "remorseless/insane", [100, 0, 228], "https://www.roblox.com/games/88005335424256/Deconfirmed-NEAT-Restored", false],
            "OToWM": ["Old Tower of Wedgicular Manslaughter", "remorseless/insane", [100, 0, 228], "https://www.roblox.com/games/99170113213701/OToWM", true],
            "RoUT": ["Room of Unfair Trials", "baseline insane", [0, 0, 255], "https://www.roblox.com/games/120788794283207/Room-of-Unfair-Trials", false],
            "MT": ["Medium Tower", "bottom insane", [0, 0, 255], "https://www.roblox.com/games/80443650366413/Medium-Tower", false],
            "ToRT": ["Tower of Random Thoughts", "mid-high insane", [0, 0, 255], "https://www.roblox.com/games/75062529132028/Tower-of-Random-Thoughts", true],
            "ToC": ["Tower of Cancer", "high-peak insane", [0, 0, 255], "https://www.roblox.com/games/18894068349/Tower-of-Cancer", true],
            "ToIB": ["Tower of Inanimate Blockiness", "high-peak insane", [0, 0, 255], "https://www.roblox.com/games/82653933581194/Tower-of-Inanimate-Blockiness", true],
            "ToWS": ["Tower of Wet Socks", "insane/extreme", [2, 69, 255], "https://www.roblox.com/games/74473724269500/Tower-of-Wet-Socks", true],
            "ToDB": ["Tower of Diamond Blade", "lower end extreme", [3, 137, 255], "https://www.roblox.com/games/140173567580717/Tower-of-Diamond-Blade", true],
            "TT": ["Triple Tower", "high extreme", [3, 137, 255], "https://www.roblox.com/games/124095927723593/Triple-Tower", true],
            "SoMN": ["Steeple of Mewing NEAT", "bottom terrifying / high end terrifying", [0, 255, 255], "https://www.roblox.com/games/18859834967/Steeple-of-Mewing-NEAT", false],
            "ToTSP": ["Tower of Thin Stud Practice", "peak terrifying", [0, 255, 255], "https://www.roblox.com/games/76782525334704/Tower-of-Thin-Stud-Practice", true],
            "Tfw": ["ToDIE from walmart", "totally catastrophic (low-mid difficult)", [255, 255, 255], "https://www.roblox.com/games/123467125783146/ToDIE-from-walmart", false],
            "ToD": ["Tower of Disease", "catastrophic", [255, 255, 255], "https://www.roblox.com/games/18997549903/Tower-of-Disease", false],
            "ToLM": ["Tower of Lunatic Masochism", "bottom-low unreal", [75, 0, 200], "https://www.roblox.com/games/133003290698864/Tower-of-Lunatic-Masochism", true],
        }

        document.body.innerHTML += `<p style="font-size:34px">my towers (count: ${Object.keys(towers).length})</p>`
        document.body.innerHTML += `<p style="color:rgba(0,0,0,0.4)">keep in mind that most of these are not playable thx to the stupid roblox maturity label update</p>`
        document.body.innerHTML += `<p style="color:rgba(0,0,0,0.4)">includes all solo towers</p>`

        for(tower in towers) {
            let towerstats = towers[tower]
            let colors = towerstats[2]
            let playable
            if(towerstats[4] === true){
                playable = "✅ playable!"
            } else {
                playable = "❌ unplayable."
            }
            document.body.innerHTML += `<p style="color:rgb(${colors[0]},${colors[1]},${colors[2]})">${tower} - ${towerstats[0]} - ${towerstats[1]} <button onclick="window.open('${towerstats[3]}')">check (${playable})</button></p>`
        }
    },
}

function loadpage() {
    document.head.innerHTML += `<link rel="icon" type="image/x-icon" href="content/icon.ico"></link>`
    loadtopbar()
    let pagefunc = pages[document.URL]
    pagefunc()
}

document.addEventListener("DOMContentLoaded", function() {
    loadpage()
})




































