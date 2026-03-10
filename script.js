const items = document.querySelectorAll('.item');
const output = document.getElementById('output');
let activeItemIndex = 0;

const content = {
    about: `
      Hey there — glad you could make it, I'm Michelle.
      I'm pretty into software engineering, AI and game development!
    `,
    contact: `
      Reach out! Always open to new opportunities and collaborations.
      michelle.kelly@queensu.ca
    `
};


items.forEach(item => {
    item.addEventListener('click', () => {
        setActive(item);
        showSection(item.dataset.section);
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        if (activeItemIndex === items.length - 1) activeItemIndex = -1;
        setActive(items[(activeItemIndex + 1)]);
        showSection(items[activeItemIndex].dataset.section);
    }
    else if (event.key === 'ArrowUp') { 
        if (activeItemIndex === 0) activeItemIndex = items.length;
        setActive(items[(activeItemIndex - 1)]);
        showSection(items[activeItemIndex].dataset.section);
    }
});

function setActive(item) {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    activeItemIndex = [...items].indexOf(item);
}

function showSection(section) {
    output.innerText = content[section];
}

showSection('about');