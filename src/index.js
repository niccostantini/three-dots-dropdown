import NormalizeStyle from './normalize.css';
import Style from './style.css';
import makeDropDown from './generateDropDown';


const links = [
    { text: 'Instagram', href: '#' },
    { text: 'Facebook', href: '#' },
    { text: 'X', href: '#' },
    { text: 'TikTok', href: '#' },
    { text: 'GitHub', href: '#' }
];

document.body.appendChild(makeDropDown(links));

function fadeInDropdown() {
    const dropdown = document.querySelector('.dropdown-content');
    if (dropdown) {
        dropdown.style.opacity = 0;
        dropdown.style.display = 'block';

        let opacity = 0;
        const fadeIn = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(fadeIn);
            } else {
                opacity += 0.1;
                dropdown.style.opacity = opacity;
            }
        }, 30);
    }
}

function fadeOutDropdown() {
    const dropdown = document.querySelector('.dropdown-content');
    if (dropdown) {
        let opacity = 1;
        const fadeOut = setInterval(() => {
            if (opacity <= 0) {
                clearInterval(fadeOut);
                dropdown.style.display = 'none';
            } else {
                opacity -= 0.1;
                dropdown.style.opacity = opacity;
            }
        }, 30);
    }
}

document.addEventListener('click', (event) => {
    const dropdown = document.querySelector('.dropdown-content');
    const dropdownBtn = document.querySelector('.dropbtn');
    if (dropdown && !dropdown.contains(event.target) && !dropdownBtn.contains(event.target)) {
        fadeOutDropdown();
    }
});

const dropdownBtm = document.querySelector('.dropbtn');

dropdownBtm.addEventListener('click', () => {fadeInDropdown()});