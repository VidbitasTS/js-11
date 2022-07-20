'use strict';
console.log('js 11');
// 1. Create <div> element
let div = document.createElement('div');

// 2. Set its class to "alert"
div.className = 'alert';

// 3. Fill it with the content
//div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
//const str = "<strong>Hi there!</strong> You've read an important message.";

//div.append(str);
const strongEl = document.createElement('strong');

strongEl.textContent = 'Hi here ';

div.append(strongEl, ' This is and alert');

//div.textContent =|" This is and select";

//document.body.appendChild(div);

//div.append(str);

const colorsListEl = document.getElementById('ul-color');
console.log(colorsListEl);

const sectionEl = colorsListEl.parentElement;
console.log(sectionEl);

const pEl = colorsListEl.nextElementSibling;
console.log(pEl);

pEl.style.fontSize = '50px';

const secondEl = colorsListEl.children[1];
secondEl.style.color = 'coral';