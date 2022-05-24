var settingsmenu = document.querySelector(".settings");
var darkTheme = document.getElementById("theme");

function settingsMenu(){
    settingsmenu.classList.toggle("settings-height");
}
darkTheme.onclick = function(){
    darkTheme.classList.toggle("dark-on");
}