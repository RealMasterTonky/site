let topbarbuttons = {
    "home": "https://realmastertonky.github.io/site/",
    "my posts": "https://realmastertonky.github.io/site/posts",
    "my artworks": "https://realmastertonky.github.io/site/artworks",
    "python programs": "https://realmastertonky.github.io/site/python",
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

// format: ["title", ["<p>paragraph 1</p>", "<img>insert image here</img>"]]
let posts = [
	["fun fact!", [`<p>i used to develop discord bot named "Tonk", which as far as i remember, used to be the biggest bot (in terms of content)</p>`, `<p>now, due to me losing interest in developing discord bots, it's p much inactive now</p>`, `<p>now, here's some screenshots of past me testing out the bot</p>`, `<br>`, `<img src="./content/post-images/img1.jpg" alt="me testing out T/Say"></img>`, `<img src="./content/post-images/img2.jpg" alt="me testing out T/Balance"></img>`, `<img src="./content/post-images/img3.jpg" alt="me testing out T/Shop"></img>`]],
    ["test i show test 2: the revenge", [`<p>purp man here vvvv</p>`, `<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.hpi5JA_MLEsL9JtJCT43dAHaJi%3Fpid%3DApi&f=1&ipt=e874a342888a28b1fa02b11295457d3e43e006bf30f6fcb032bc594264175e1d&ipo=images"></img>`]],
]

let pages = {
    "https://realmastertonky.github.io/site/": function() {
        document.body.innerHTML += "<h1>home</h1>"
        document.body.innerHTML += "<p>welcome to my website! for now it's about showing my things & creations</p>"
        document.body.innerHTML += "<p>so yeah, feel free to explore things here</p>"

        document.body.innerHTML += `<p style="font-size:34px">recent posts</p>`
        let recentposts = document.createElement('div')
        recentposts.className = "MyPosts"
        document.body.appendChild(recentposts)

        let post1 = document.createElement('div')
        post1.className = "post"
        post1.innerHTML += `<p class="title">${posts[0][0]}</p>`
        for(element in posts[0][1]) {
            post1.innerHTML += posts[0][1][element]
        }
        recentposts.appendChild(post1)
    },
    "https://realmastertonky.github.io/site/posts": function() {
        document.body.innerHTML += "<h1>my posts</h1>"
        
        let postsdiv = document.createElement('div')
        postsdiv.className = "MyPosts"
        document.body.appendChild(postsdiv)

        for(post in posts) {
            let postdiv = document.createElement('div')
            postdiv.className = "post"
            postdiv.innerHTML += `<p class="title">${posts[post][0]}</p>`
            for(element in posts[post][1]) {
                postdiv.innerHTML += posts[post][1][element]
            }
            postsdiv.appendChild(postdiv)
        }

        document.body.innerHTML += "<br>"

		document.body.innerHTML += `<p style="font-size:34px">legacy posts</p>`

        let legacypostsdiv = document.createElement('div')
        legacypostsdiv.className = "MyPosts"
        document.body.appendChild(legacypostsdiv)

        legacypostsdiv.innerHTML = `
        <div class="post">
		<p class="title">about my roblox stuff</p>
		<p>as u heard from multiple youtubers, roblox is getting sued and stuff. so well, it looks like roblox is gonna dier soon as they're losing billions, so here's wat am gonna do:</p>
		<p>am gonna start putting the roblox related stuff (my games &amp; towers) into a separate page, and i think i'll start making games outside of roblox</p>
		<p>why roblox into a separate page? well it's MY choice to do so! and if roblox actually diers, it'll be easier for me to erase the page from existence!</p>
		<p>anyways uh yeah... quite sad that roblox's this corporate, like they couldn't even make a proper moderation team 💔</p>
		<p>and i hope things will go well soon. #FREESCHLEP !</p>
        </div>
		
		<div class="post">
		<p class="title">fun fact!</p>
		<p>this is the first ever tonk image right here</p>
		<p>made on april 9th, 2021 (4 years ago. time flies fast fr...)</p>
        <br>
		<img src="./content/first tonk image.png" alt="first tonk image">
		</div>

		<div class="post">
		<p class="title">i all jumped ToLM!!</p>
		<p>so uh yeah it took me over an hour to do that (the difficulty of that is bottom-low unreal btw), and it was painful.</p>
		<p>now with that being done, i'll prob make a vid about the tower soon</p>
        <br>
		<img src="https://media.discordapp.net/attachments/1400809228108824596/1401520542476926976/image.png?ex=68909338&amp;is=688f41b8&amp;hm=dbdbd000c28252584fa252ab2214fdc597e74c67613bc8d3b9803eac1cc8b763&amp;=&amp;format=webp&amp;quality=lossless&amp;width=845&amp;height=191" alt="all ToLM recordings">
		</div>

		<div class="post">
		<p class="title">roblox the corporate piece of shit</p>
		<p>they're investigating this issue for over a week now, when will these lazy things do smth about it?!</p>
        <br>
		<img src="https://media.discordapp.net/attachments/1400809228108824596/1400809331284512838/image.png?ex=688dfcda&amp;is=688cab5a&amp;hm=ce003f006fb491ee24cd45733cce4f0f67c46f20b336687ebdf4f5845c7801df&amp;=&amp;format=webp&amp;quality=lossless&amp;width=1133&amp;height=698" alt="image of roblox still having issue">
		<img src="https://media.discordapp.net/attachments/1400809228108824596/1400809331867390053/image.png?ex=688dfcda&amp;is=688cab5a&amp;hm=2fcd5dc3a1ecdeca822833aca4fa7d7982eed2ef1141f135af491271bd7a67f7&amp;=&amp;format=webp&amp;quality=lossless&amp;width=639&amp;height=417" alt="image of me failing to play me game">
		<br>
		^^^^
		<br>
		who ate the images??
		</div>

		<div class="post">
		<p class="title">test i show test</p>
        <br>
		<img src="https://tse3.mm.bing.net/th/id/OIP.80KL0snEb6cQnTDxCStuuAHaFo?r=0&amp;rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3" alt="i always come back">
		</div>
        `
    },
    "https://realmastertonky.github.io/site/python": function() {
        document.body.innerHTML += "<h1>python programs</h1>"
        document.body.innerHTML += "<p>all of them are made in python 3.8.0, so don't be suprised if they don't work properly on newer versions of the programming language</p>"
        document.body.innerHTML += "<p>and every program (except for maththing.py) requires pygame module.</p>"
        document.body.innerHTML += "<br>"
        document.body.innerHTML += `<div style="background-color:rgba(255,255,255,0.2)"><p>first game.py - "game" where red ball (that ur controlling using arrow keys) eats blue balls, growing in size.</p><button onclick="window.open('./content/pythonprograms/first game.py')">download</button></div>`
        document.body.innerHTML += `<div style="background-color:rgba(255,0,0,0.2)"><p>clickcircles.py - game where u can choose difficulty, where u just click on the red dots on the white background till the timer runs out</p><button onclick="window.open('./content/pythonprograms/clickcircles.py')">download</button></div>`
        document.body.innerHTML += `<div style="background-color:rgba(0,255,0,0.2)"><p>drawthing.py - remember paint? this is just worse version of it, where pressing 1-9 changes color of the brush & pressing delete key clears the entire thing</p><button onclick="window.open('./content/pythonprograms/drawthing.py')">download</button></div>`
        document.body.innerHTML += `<div style="background-color:rgba(0,0,255,0.2)"><p>maththing.py - infinite math test with score that increases when u answer each question correctly (the math questions are easy)</p><button onclick="window.open('./content/pythonprograms/maththing.py')">download</button></div>`
        document.body.innerHTML += `<div style="background-color:rgba(255,255,0,0.2)"><p>platformergame v1.zip - failed attempt at making a platformer game 🤑👍</p><button onclick="window.open('./content/pythonprograms/platformergame v1.zip')">download</button></div>`
        document.body.innerHTML += `<div style="background-color:rgba(255,0,255,0.2)"><p>platformergame v2.zip - sorta successful attempt at making a platformer game, u can modify the objects in the file but it's prob gonna be wonky</p><button onclick="window.open('./content/pythonprograms/platformergame v2.zip')">download</button></div>`
		document.body.innerHTML += "<br>"
		document.body.innerHTML += "<p>feel free to modify any of these files without my permission</p>"
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
            "ToD": ["Tower of Disease", "catastrophic", [255, 255, 255], "https://www.roblox.com/games/18997549903/Tower-of-Disease", true],
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
    "https://realmastertonky.github.io/site/artworks": function() {
        document.body.innerHTML += "<h1>my artworks</h1>"
        document.body.innerHTML += `<button style="font-size:30px" onclick="window.location.href='https://realmastertonky.github.io/site/artworks/atrocities'">atrocities</button><br>low quality caricatures that i drew for laughs and coughs<br><br>`
        document.body.innerHTML += `<button style="font-size:30px" onclick="window.location.href='https://realmastertonky.github.io/site/artworks/digital'">digital drawings</button><br>pixels arranged in a way that makes (imo) decent images<br><br>`
        document.body.innerHTML += `<button style="font-size:30px" onclick="window.location.href='https://realmastertonky.github.io/site/artworks/irl'">irl drawings</button><br>pictures of papers with drawings`
    },
    "https://realmastertonky.github.io/site/artworks/atrocities": function() {
        document.body.innerHTML += "<h1>atrocities</h1>"
        document.body.innerHTML += "<p>good luck viewing all of these</p>"

        let files = [
            "ATROCITY.png",
            "FRISK FROM SOU.png",
            "LET'S FUCKING GOOOOOOOOOOOO.png",
            "SHOCKED.png",
            "Smiling burping idiot.png",
            "WEGA APPROVER.png",
            "WEGA.png",
            "angry cuphead goblin.png",
            "arrrrrrrrrrr matey.png",
            "average smoking dude.png",
            "broken axe.png",
            "buff pig hybrid thing.png",
            "cat.png",
            "chara ze knife.png",
            "chill dude.png",
            "coems.png",
            "cold emoji thing.png",
            "cry potato.png",
            "demon rock.png",
            "dinosaur thing.png",
            "drawn psychopath.png",
            "engineer.png",
            "epic.png",
            "fat thing..png",
            "finger clown.png",
            "freaky.png",
            "freddy wannabe.png",
            "goo goo gaa gaa ahh vampire thing.png",
            "guy with a mace.png",
            "guy.png",
            "handsome.png",
            "i drink coffee.png",
            "ice cream man.png",
            "mama am a criminal.png",
            "man.png",
            "mind blown.png",
            "muahahHAHAAHAHAHAHA.png",
            "nerd thing.png",
            "people with headless.png",
            "pringles.png",
            "sick man thing.png",
            "stinkers.png",
            "surprised geometry gash thingy.png",
            "the pokemon cowboy.png",
            "thing.png",
            "this thing.png",
            "toilet driver omg.png",
            "troll cloud.png",
            "utterly surprised thing.png",
            "vampire looking thing.png",
            "whatthefuck.png",
            "wtf have i created.png",
        ]

        let gallery = document.createElement("div")
        gallery.className = "gallery"
        document.body.appendChild(gallery)
        
        files.forEach(filename => {
            let image = document.createElement("div")
            image.className = "image"
            gallery.appendChild(image)
            image.innerHTML += `<img src="../content/atrocities/${filename}"></img><br><div class="title">${filename}</div>`
        })
    },
    "https://realmastertonky.github.io/site/artworks/digital": function() {
        document.body.innerHTML += "<h1>digital drawings</h1>"

        let files = [
            "area 2.png",
            "pit of misery.png",
            "ToHH completion vid thumbnail (no text).png",
            "my friend's dream.png",
        ]

        let gallery = document.createElement("div")
        gallery.className = "gallery"
        document.body.appendChild(gallery)
        
        files.forEach(filename => {
            let image = document.createElement("div")
            image.className = "image"
            gallery.appendChild(image)
            image.innerHTML += `<img src="../content/digital/${filename}"></img><br><div class="title">${filename}</div>`
        })
    },
    "https://realmastertonky.github.io/site/artworks/irl": function() {
        document.body.innerHTML += "<h1>irl drawings</h1>"

        let files = [
            "me (but im one with the stars).png",
            "parallel world.png",
            "light of hope.png",
        ]

        let gallery = document.createElement("div")
        gallery.className = "gallery"
        document.body.appendChild(gallery)
        
        files.forEach(filename => {
            let image = document.createElement("div")
            image.className = "image"
            gallery.appendChild(image)
            image.innerHTML += `<img src="../content/irl/${filename}"></img><br><div class="title">${filename}</div>`
        })
    },
}

function loadpage() {
    let depth = document.URL.split('/').length-5
    let thatthing = "../"
    if(depth === 0){thatthing=""}else{if(depth>1){thatthing.repeat(depth)}}
    document.head.innerHTML += `<link rel="icon" type="image/x-icon" href="${thatthing}content/icon.ico"></link>`
    loadtopbar()
    let pagefunc = pages[document.URL]
    pagefunc()
}

document.addEventListener("DOMContentLoaded", function() {
    loadpage()
})





























































