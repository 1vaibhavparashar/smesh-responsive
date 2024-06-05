let img = document.querySelector('img');
let smesh = document.querySelector('button');

let a = "wtf2.png";
let b = "woife2.png";
let c = "king2.png";
let d = "doubleChamp2.png";
let e = "allah.png";
let khabib = new Audio('khabib.mp3');
let doubleChamp = new Audio("doublechamp.mp3");
let woife = new Audio("woife.mp3");
let wtf = new Audio("wtf.mp3");
let king = new Audio("kingisback.mp3");

let arr = [a, b, c, d, e];
let i = 0;

let call = function() {
    smesh.style.color = "red";
    smesh.style.fontSize = "100px";
    setTimeout(() => {
        smesh.style.color = "white";
    }, 1000);
    img.setAttribute('src', arr[i]);
    if (i % arr.length == 0) {
        khabib.pause();
        wtf.play();
    }
    if (i % arr.length == 1) {
        wtf.pause();
        woife.play();
    }
    if (i % arr.length == 2) {
        woife.pause();
        king.play();
    }
    if (i % arr.length == 3) {
        king.pause();
        doubleChamp.play();
    }
    if (i % arr.length == 4) {
        doubleChamp.pause();
        khabib.play();
    }
    i = (i + 1) % arr.length;
};

smesh.addEventListener('click', call);
