function r() {
    console.log("poo")
}

const pages = {
    "https://realmastertonky.github.io/site/": function() {
        console.log(document.URL)
    }
}

function loadpage() {
    const pagefunc = pages[document.URL]
    pagefunc()
}

