import createElement from "./utils.js";
import diningImage from "../images/dinner.svg";

function generateHeroSection () {
    const heroContainer = createElement('div', 'hero');

    // Hero texts
    const textContainer = createElement('div', 'texts');
    textContainer.appendChild(createElement('h1', null, null, null, 'A Symphony of Flavors<br>Crafted with Passion'));
    textContainer.appendChild(createElement('p', null, null, null, 'Discover the Perfect Blend of Tradition and Innovation in<br>Every Bite, Where Every Dish is a Masterpiece<br>Crafted to Delight Your Senses.'));

    const actionButtons = createElement('div', 'action-buttons');
    actionButtons.appendChild(createElement('button', ['primary-btn', 'menu-btn'], {'type' : 'button'}, 'Order Now'));
    actionButtons.appendChild(createElement('button', ['secondary-btn', 'about-btn'], {'type' : 'button'}, 'About Us'));

    textContainer.appendChild(actionButtons);

    // Hero Image
    const diningIllustration = createElement('img', null, {
        'src' : diningImage,
        'alt' : 'Fine dining illustration',
        'width' : '190px',
        'height' : '147px'
    });
    
    heroContainer.appendChild(textContainer);
    heroContainer.appendChild(diningIllustration);

    return heroContainer;
};

function generateReviewSection () {
    const reviewContainer = createElement('div', 'review');

    // Review aspects
    const cuisineContainer = createElement('div', 'review-aspect');
    cuisineContainer.appendChild(createElement('h2', null, null, '50+'));
    cuisineContainer.appendChild(createElement('p', null, null, 'Cuisine'));

    const likesContainer = createElement('div', 'review-aspect');
    likesContainer.appendChild(createElement('h2', null, null, '1296+'));
    likesContainer.appendChild(createElement('p', null, null, 'Likes'));

    const ratingContainer = createElement('div', 'review-aspect');
    ratingContainer.appendChild(createElement('h2', null, null, '4.8'));
    ratingContainer.appendChild(createElement('p', null, null, 'Rating'));

    // Append Child
    reviewContainer.appendChild(cuisineContainer);
    reviewContainer.appendChild(likesContainer);
    reviewContainer.appendChild(ratingContainer);

    return reviewContainer;
};

export { generateHeroSection, generateReviewSection };