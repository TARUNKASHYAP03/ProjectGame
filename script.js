let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let random = Math.floor(Math.random() * 4);
    let ranColor = btns[random];
    let ranbtn = document.querySelector(`.${ranColor}`);
    // console.log(random);
    // console.log(ranColor);
    // console.log(ranbtn)
    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameflash(ranbtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 250);
        }
    }
    else {
        h2.innerHTML = `Game over! Your score was <br> <b>${level}</b><br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}