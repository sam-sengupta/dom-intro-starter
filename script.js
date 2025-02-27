// one
document.getElementById("firstPara").innerHTML += "<span class='tan'> This is the new tan text.</span>";

// two
let images = document.getElementsByTagName("img");
for (let image of images) {
    image.width = "250";
}

// three
let lightBlueSpans = document.getElementsByClassName("light-blue");
let dkBlueSpans = document.getElementsByClassName("med-blue");

for (let span of lightBlueSpans) {
    span.style.color = "#7C9EA6";
}

for (let span of dkBlueSpans) {
    span.style.color = "#3C5E73";
}

// four
let svgs = document.querySelectorAll("#svgs svg");

let colors = ("#283040", "#3C5E73", "#7C9EA6", "#D9BCA3", "#F2DCC9");
for (let i = 0; i < svgs.length; i++) {
    svgs[i].style.stroke = colors[i];
}

// five
document.querySelector("#query .bold").style.color = "#7C9EA6";

// six
document.querySelector(".content_list li:first-of-type").textContent = "This is a new list item text";
document.querySelectorAll(".content_list li")[2].innerHTML += "<strong> Sam Sengupta</strong>";

// seven
document.querySelector("#remove a").removeAttribute("hidden");