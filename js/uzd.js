'use strict';

function createSection() {
    //console.log('okkk');
    const contEl = document.querySelector('.container');
    console.log(contEl);

    const sectioEl = document.createElement('section');
    sectioEl.className = 'card';
    const h2El = document.createElement('h2');
    const pEl = document.createElement('p');
    h2El.id = 'yes';
    h2El.textContent = 'Section title';
    pEl.className = 'text';
    pEl.textContent = 'Helo';

    sectioEl.append(h2El, pEl);
    //document.body.append(sectioEl);
    contEl.append(sectioEl);
}

function createArticle() {
    //   const articleEl = document.createElement('article');
    //const articleEl = createProperEl('article', 'card');
    const articleEl = createProperEl(
        'article',
        'card',
        '',
        document.body.querySelector('.container')
    );
    createProperEl('h3', 'title_a', 'JS', articleEl);
    createProperEl('p', 'date', '2022-02-02', articleEl);
    createProperEl('p', 'text', 'lorem lorem lorem', articleEl);

    //    articleEl.append(h3El, pDateEl, pTextEl);
    //document.body.querySelector('.container').append(articleEl);

    // const articleEl = createProperEl('article', 'card', '');

    // const h3El = createProperEl('h3', 'title_a', 'JS');
    // const pDateEl = createProperEl('p', 'date', '2022-02-02');
    // const pTextEl = createProperEl('p', 'text', 'lorem lorem lorem');

    // articleEl.append(h3El, pDateEl, pTextEl);
    // document.body.querySelector('.container').append(articleEl);

    // return

    //     const contEl = document.querySelector('.container');
    //     console.log(contEl);

    //     const artEl = document.createElement('article');
    //     artEl.className = 'about';
    //     const h3El = document.createElement('h3');
    //     h3El.className = 'a__title';
    //     h3El.textContent = 'About me';
    //     const pEl = document.createElement('p');
    //     pEl.className = 'a__summary';
    //     pEl.textContent = 'This is short summary about me';
    //     const h4El = document.createElement('h4');
    //     h4El.className = 'a__towns-title';
    //     h4El.textContent = 'towns I have visited';

    //     const liArr = ['Kaunas', 'Vilnius', 'Klaipeda'];

    //     const newUlEl = document.createElement('ul');
    //     for (let i = 0; i < liArr.length; i++) {
    //         let newLiEl = document.createElement('li');
    //         newLiEl.className = 'a__towns';
    //         newLiEl.textContent = liArr[i];
    //         newUlEl.append(newLiEl);
    //     }

    //     const btnEl = document.createElement('button');
    //     btn2El.id = 'more-btn';
    //     btn2El.textContent = 'Learn more';

    //     artEl.append(h3El, pEl, h4El, newUlEl, btn2El);
    //     contEl.append(artEl);
}

const btnEl = document.getElementById('btn');

const btn2El = document.getElementById('btn2');

btnEl.addEventListener('click', createSection);
btn2El.addEventListener('click', createArticle);