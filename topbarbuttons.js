console.log("test")

function addbuttons(topbar) {
  const homebutton = document.createElement("button");
  homebutton.innerText = "home"
  homebutton.onclick = function() {
  window.location.href='https://realmastertonky.github.io/site'
  }
  topbar.appendChild(homebutton)
  const towersbutton = document.createElement("button");
  towersbutton.innerText = "my towers"
  towersbutton.onclick = function() {
  window.location.href='https://realmastertonky.github.io/site/towers'
  }
  topbar.appendChild(towersbutton)
}
