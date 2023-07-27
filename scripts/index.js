
var containerBug = document.getElementById('containerBug');
function randomX(){
    let min = containerBug.getBoundingClientRect().left;
    let max = containerBug.getBoundingClientRect().width;
    return Math.random() * (max - min) + min;
}
function rundomY(){
    let min = containerBug.getBoundingClientRect().top;
    let max = containerBug.getBoundingClientRect().height-100;
    return Math.random() * (max - min) + min;
}

const bug1 = document.getElementById('1');
const bug2 = document.getElementById('2');
const bug3 = document.getElementById('3');
const bug4 = document.getElementById('4');
const bug5 = document.getElementById('5');

var bug1Index = 0;
var bug2Index = 0;
var bug3Index = 0;
var bug4Index = 0;
var bug5Index = 0;

function victory (){
    if (bug1Index == 1 && bug2Index == 1 && bug3Index == 1 && bug4Index == 1 && bug5Index == 1) {
        alert ('ВЫ ПОЙМАЛИ ВСЕХ ЖУКОВ! ПОЗДРАВЛЯЮ!');
    }
}


const timer = 1000;

function activityBugs() {
        bug1.style.left = `${randomX()}`+'px'; bug1.style.top = `${rundomY()}`+'px';
        bug2.style.left = `${randomX()}`+'px'; bug2.style.top = `${rundomY()}`+'px'; 
        bug3.style.left = `${randomX()}`+'px'; bug3.style.top = `${rundomY()}`+'px'; 
        bug4.style.left = `${randomX()}`+'px'; bug4.style.top = `${rundomY()}`+'px'; 
        bug5.style.left = `${randomX()}`+'px'; bug5.style.top = `${rundomY()}`+'px'; 
    }

    setInterval(activityBugs, timer);    

bug1.addEventListener ('click', ()=> {
    bug1.style.display = 'none';
    bug1Index = 1;
    victory ();
});
bug2.addEventListener ('click', ()=> {
    bug2.style.display = 'none';
    bug2Index = 1;
    victory ();
});
bug3.addEventListener ('click', ()=> {
    bug3.style.display = 'none';
    bug3Index = 1;
    victory ();
});
bug4.addEventListener ('click', ()=> {
    bug4.style.display = 'none';
    bug4Index = 1;
    victory ();
});
bug5.addEventListener ('click', ()=> {
    bug5.style.display = 'none';
    bug5Index = 1;
    victory ();
});

document.getElementById('btnNewPlay').addEventListener ('click', ()=> {
    bug1Index = 0;
    bug2Index = 0;
    bug3Index = 0;
    bug4Index = 0;
    bug5Index = 0;
    bug1.style.display = 'inline';
    bug2.style.display = 'inline';
    bug3.style.display = 'inline';
    bug4.style.display = 'inline';
    bug5.style.display = 'inline';
});