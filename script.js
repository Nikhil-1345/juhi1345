let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById("noButton");
let giftImage = document.getElementById("giftImage");

// Make "Yes" button move when hovered
yesButton.addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    yesButton.style.left = `${x}px`;
    yesButton.style.top = `${y}px`;
});

// Show the hidden image when clicking "No"
noButton.addEventListener("click", function() {
    giftImage.style.display = "block";
});
