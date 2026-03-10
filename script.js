const items = document.querySelectorAll('.item');
const output = document.getElementById('output');

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
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        showSection(item.dataset.section);
    });
});

function showSection(section) {
    output.innerText = content[section];
}

showSection("about");