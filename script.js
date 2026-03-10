const items = document.querySelectorAll('.item');
const output = document.getElementById('output');
let activeItemIndex = -1;
let shownSectionIndex = -2;

const content = {
    about: `
      <p>
      Hey there — glad you could make it, I'm Michelle. <br>
      I'm pretty into <b>software engineering, AI and game development!</b>
      </p>
      
    `,
    projects: `
      <p>
      Here are some of my recent projects:
      </p>
      <ul>
        <li><a href="https://github.com/MichelleKellyy/ConnectKingston" target="_blank">ConnectKingston:</a> An AI-powered matching platform that helps Kingston residents discover meaningful volunteer opportunities tailored to their interests and skills. (add website)</li>
        <li><a href="https://github.com/MichelleKellyy/DAIR-Music-Genre-Transfer" target="_blank">Music Genre Transfer:</a> Instrument-specific symbolic music genre transfer with machine learning. (add paper)</li>
        <li><a href="https://github.com/MichelleKellyy/FaceShield" target="_blank">FaceShield:</a> An app that analyzes how vulnerable a face photo is to AI recognition, cloaks it using near invisible privacy-preserving image transformations with before-and-after protection scoring. (add demo + doc)</li>
      </ul>
    `,
    contact: `
      <p>
      Reach out! Always open to new opportunities and collaborations. <br> <br>
      <a href="mailto:michelle.kelly@queensu.ca">michelle.kelly@queensu.ca</a>
      </p>
    `
};

items.forEach(item => {
    item.addEventListener('click', () => {
        if ([...items].indexOf(item) === shownSectionIndex) {
            output.innerHTML = '';
            shownSectionIndex = -2;
        }
        else {
            setActive(item);
            showSection(item.dataset.section);
        }
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        if (activeItemIndex === items.length - 1) activeItemIndex = -1;
        setActive(items[(activeItemIndex + 1)]);
    }
    else if (event.key === 'ArrowUp') { 
        if (activeItemIndex === 0) activeItemIndex = items.length;
        setActive(items[(activeItemIndex - 1)]);
    }
    else if (event.key === 'Enter') {
        if (activeItemIndex === shownSectionIndex) {
            output.innerHTML = '';
            shownSectionIndex = -2;
        }
        else {
            showSection(items[activeItemIndex].dataset.section);
        }
    }
});

function setActive(item) {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    activeItemIndex = [...items].indexOf(item);
}

function showSection(section) {
    output.innerHTML = content[section];
    shownSectionIndex = activeItemIndex;
}