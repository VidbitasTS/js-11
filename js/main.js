'use strict';
console.log('js 11');
// 1. Create <div> element
let div = document.createElement('div');

// 2. Set its class to "alert"
div.className = 'alert';

// 3. Fill it with the content
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
const str = "<strong>Hi there!</strong> You've read an important message.";

div.append(str);

//div.append(str);