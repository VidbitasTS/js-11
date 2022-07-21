'use strict';

/**
 * This function is create elements and class and text
 * @param {string} tag = tag of the element
 * @param {string} className = class name
 * @param {string} text = text content
 * @param {HTMLElement} dest
 * @returns {HTMLelement}
 */

function createProperEl(tag, className, text, dest) {
    console.log(dest);
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    if (dest) dest.append(el);
    return el;
}
// function createProperEl(tag, className, text) {
//     const el = document.createElement(tag);
//     if (className) el.className = className;
//     if (text) el.textContent = text;
//     return el;
// }

//const artEl = createProperEl('h3', 'title_a', 'JS')
// const h3El = createProperEl('h3', 'title_a', 'JS');
// console.log('h3El ===', h3El);