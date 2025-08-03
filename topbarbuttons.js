console.log("test")

const homebutton = document.createElement("div");
homebutton.innerText = "home"
homebutton.onclick = function() {
  window.location.href='https://realmastertonky.github.io/site'
}
document.body.appendChild(document.getElementById("topbar"))
