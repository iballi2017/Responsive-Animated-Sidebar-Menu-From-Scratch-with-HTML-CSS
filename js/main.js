// alert("hello world")

function openSlideMenu() {
    document.querySelector("#menu").style.width = "250px";
    document.querySelector("#content").style.marginLeft = "250px";

}

function closeSlideMenu() {
    document.querySelector("#menu").style.width = "0";
    document.querySelector("#content").style.marginLeft = "0";

}