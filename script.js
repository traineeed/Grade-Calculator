let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');

let countbtn = document.getElementById('countbtn');
let result = document.getElementById('result');

countbtn.addEventListener('click', function main() {
    let onejs = parseInt(one.value) || 0;
    let twojs = parseInt(two.value) || 0;
    let threejs = parseInt(three.value) || 0;
    let fourjs = parseInt(four.value) || 0;
    let fivejs = parseInt(five.value) || 0;

    let twosjs = twojs * 2;
    let threesjs = threejs * 3;
    let foursjs = fourjs * 4;
    let fivesjs = fivejs * 5;

    let oper = onejs + twojs + threejs + fourjs + fivejs;

    if (oper > 0) {
        let res = (onejs + twosjs + threesjs + foursjs + fivesjs) / oper;
        result.textContent = res.toFixed(2);
    } else {
        result.textContent = "0.00";
    }
});
