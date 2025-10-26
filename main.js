function r() {
    console.log("poo")
}

const pages = {
    "https://realmastertonky.github.io/site/": function() {
        console.log("shit")
    }
}

function loadpage() {
    const pagefunc = pages[document.URL]
    pagefunc()
}
