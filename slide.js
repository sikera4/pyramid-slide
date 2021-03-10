let select = document.querySelector('select');
let slider = document.querySelector('input');
let pyrHeight = document.querySelector('.pyrheight')
drawUglyPyramid(10);
slider.addEventListener('input', function drawUglyPyramid(e) {
    let pyr = document.querySelector('.pyramid');
    while (pyr.firstChild) {
        pyr.removeChild(pyr.firstChild);
    };
    let height = e.target.valueAsNumber;
    for (let i = 1; i <= height; i++) {
        let line1 = String.fromCharCode(160).repeat(height - i);
        let line2 = (select.value).repeat(i + 1);
        let div = document.querySelector('.pyramid');
        let p = document.createElement('p');
        div.appendChild(p);
        p.innerText = line1 + line2;
    };
    pyrHeight.textContent = height;
});

select.addEventListener('input', function drawAnotherPyramid(e) {
    let pyr = document.querySelector('.pyramid');
    while (pyr.firstChild) {
        pyr.removeChild(pyr.firstChild);
    };
    let height = slider.value;
    for (let i = 1; i <= height; i++) {
        let line1 = String.fromCharCode(160).repeat(height - i);
        let line2 = (e.target.value).repeat(i + 1);
        let div = document.querySelector('.pyramid');
        let p = document.createElement('p');
        div.appendChild(p);
        p.innerText = line1 + line2;
    };
});

function drawUglyPyramid(height) {
    for (let i = 1; i <= height; i++) {
        let line1 = String.fromCharCode(160).repeat(height - i);
        let line2 = (select.value).repeat(i + 1);
        let div = document.querySelector('.pyramid');
        let p = document.createElement('p');
        div.appendChild(p);
        p.innerText = line1 + line2;
    }
    pyrHeight.textContent = height;
}

