'use strict';

const arr = ['a', 'b', 'c'];

const arrLength = arr.length;
//let i = 0;

function recTest(arrTest, i) {
    console.log(arrTest, i);
    //   debugger;
    i++;
    if (i < arrLength) {
        console.log('darom');
        recTest(arr);
    }
}

//recTest(arr);

// const articleEl = createProperEl(
//     'article',
//     'card',
//     '',
//     document.body.querySelector('.container')
// );
// createProperEl('h3', 'title_a', 'JS', articleEl);
// createProperEl('p', 'date', '2022-02-02', articleEl);
// createProperEl('p', 'text', 'lorem lorem lorem', articleEl);

let mainEl = document.body;

// function createProperEl1(tag, className, text, dest) {
//let mainEl = createProperEl1('div', 'container', '', document.body);
// if (mainEl) {
//     mainEl = dest;
// }

function createProperEl1(arrDom, dest, arrLength) {
    let el = '';
    for (let i = 0; i < arrLength; i++) {
        el = document.createElement(arrDom[i][0]);
        if (arrDom[i][1]) el.className = arrDom[i][1];
        if (arrDom[i][2]) el.textContent = arrDom[i][2];
        if (arrDom[i][4] === '') {
            if (arrDom[i][3]) mainEl.append(el);
        } else {
            mainEl = mainEl.querySelector('.' + arrDom[i - 1][1]);
            console.log(mainEl);
            if (arrDom[i][3]) mainEl.append(el);
        }
    }
}

//console.log('kitas============', i, arrDom[i][1], arrDom[i - 1][1]);
//mainEl.insertAdjacentHTML('beforeend', el);
//mainEl.insertAdjacentHTML('beforeend', el);

// if (arrDom[i][3]) arrDom[i][3].append(el);
//let mainEl = createProperEl1('div', 'container', '', document.body);
//mainEl.append

const htmlDom = [
    ['div', 'container', '', mainEl, ''],
    ['h3', 'title_a', 'JS', mainEl, 'beforeend'],
    ['p', 'date', '2022-02-02', mainEl, ''],
    ['p', 'text', 'lorem lorem lorem', mainEl, ''],
];

// const htmlDom = [
//     [
//         'div',
//         'container',
//         '',
//         mainEl,
//         '', ['h3', 'title_a', 'JS', mainEl, 'beforeend'],
//         ['p', 'date', '2022-02-02', mainEl, 'beforeend'],
//         ['p', 'text', 'lorem lorem lorem', mainEl, 'beforeend'],
//     ],
// ];

console.log(htmlDom);
createProperEl1(htmlDom, document.body, htmlDom.length);

//htmlDom.method();