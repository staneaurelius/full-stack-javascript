import '../css/normalize.css';
import '../css/style.css';
import { generateHeroSection, generateReviewSection } from './home';
import { generateSummarySection, generateJourneySection } from './about';
import { generateMenuHeading, generateCardGrid } from './menu';

const contentInitator = (function () {
    const contentContainer = document.querySelector('#content');
    contentContainer.appendChild(generateHeroSection());
    contentContainer.appendChild(generateReviewSection());

    const getContentContainer = () => contentContainer;
    return { getContentContainer };
})();

const contentChanger = (function () {
    const navButtons = document.querySelector('nav').children;
    const contentContainer = contentInitator.getContentContainer();

    // Home page button
    const homeButton = document.querySelector('.home-btn');
    homeButton.addEventListener('click', (e) => {
        clearContainer(contentContainer);
        contentContainer.appendChild(generateHeroSection());
        contentContainer.appendChild(generateReviewSection());

        removeActiveClass(navButtons, 'active');
        homeButton.classList.add('active');
    });

    // Menu button
    const menuButton = document.querySelector('.menu-btn');
    menuButton.addEventListener('click', (e) => {
        clearContainer(contentContainer);
        contentContainer.appendChild(generateMenuHeading());
        contentContainer.appendChild(generateCardGrid());

        removeActiveClass(navButtons, 'active');
        menuButton.classList.add('active');
    });

    // About us button
    const aboutButtons = document.querySelectorAll('.about-btn');
    aboutButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            clearContainer(contentContainer);
            contentContainer.appendChild(generateSummarySection());
            contentContainer.appendChild(generateJourneySection());

            removeActiveClass(navButtons, 'active');
            const aboutNav = document.querySelector('.about-btn');
            aboutNav.classList.add('active');
        });
    });
})();

function clearContainer (container) {
    while (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
    };
};

// For removing active class from nav buttons
function removeActiveClass (elementArray, className) {
    for (const element of elementArray) {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
        };
    };
};