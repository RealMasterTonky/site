function r() {
    console.log("poo")
}

const pages = {
    "https://realmastertonky.github.io/site/": function() {
        document.body.innerHTML += "<h1>i am beeve</h1>\nsteve*"
        document.title = "dermo"
    }
}

function loadpage() {
    const pagefunc = pages[document.URL]
    pagefunc()
}



