function generateBG() {
    var bgNumber = Math.floor(Math.random() * 5);
    //console.log(bgNumber);
    var bgList = [
        "images/moonbackground.jpg",
        "images/spacebackground.jpeg",
        "images/starbackground.jpg",
        "images/starrybackground.jpg",
        "images/galaxybackground.jpg"
    ];
    var headBar= document.getElementById("headBar");
    headBar.style.backgroundImage="url("+bgList[bgNumber];
}
generateBG();

