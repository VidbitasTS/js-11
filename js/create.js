'use strict';

const colorsListEl = document.getElementById('ul-color');

const newLiEl = document.createElement('li');

newLiEl.textContent = 'Total New color';
// colorsListEl.append(newLiEl);
// colorsListEl.prepend(newLiEl);
// colorsListEl.children[2].before(newLiEl);

colorsListEl.insertAdjacentElement('beforeend', newLiEl);
colorsListEl.insertAdjacentHTML('afterbegin', '<li>Best color</>');
colorsListEl.insertAdjacentHTML('afterend', '<p class="card">2022</p>');
colorsListEl.insertAdjacentText('beforeend', 'labassss');

// uzd

const sectionNew = document.createElement('section');
const str = '<h2>tai sekcija</h2>';
sectionNew.append(str);
// sectionNew.createElement('h2');
// sectionNew.querySelector('h2').textContent = 'Section title';
// sectionNew.createElement('p');
// sectionNew.querySelector('p').className = 'classs';
// sectionNew.querySelector('p').textContent = 'Tai yra sekcija';

document.body.appendChild(sectionNew);