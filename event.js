// Click to color Red function 
function makeRed(){
    document.body.style.backgroundColor = 'red';
}
// Click to color Blue function 
function makeBlueish(){
    document.body.style.backgroundColor = 'blue';
}

const makeBlue = document.getElementById('blueButton');
makeBlue.onclick = makeBlueish;

const greenButton = document.getElementById('makeGreen');
// console.log(greenButton);
// anonymous function 
greenButton.onclick = function(){
    document.body.style.backgroundColor = 'green';
}

// addEventListener Broad version
const grayButton = document.getElementById('makeGray');
grayButton.addEventListener('click', makeGrayColor);

function makeGrayColor(){
    document.body.style.backgroundColor = 'gray';
}
// addEventListener Short version
const hotPinkButton = document.getElementById('makeHotPink');
// console.log(hotPinkButton);
hotPinkButton.addEventListener('click', function makePink (){
    document.body.style.backgroundColor = 'HotPink';
});
// addEventListener Brief version
document.getElementById('makeLightBlue').addEventListener('click', function(){
    document.body.style.backgroundColor = 'LightBlue';
});