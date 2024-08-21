import '../css/normalize.css';
import '../css/style.css';
import { generateHeroSection, generateReviewSection } from './home';

const contentContainer = document.querySelector('#content');
const heroContainer = generateHeroSection();
const reviewContainer = generateReviewSection();

contentContainer.appendChild(heroContainer);
contentContainer.appendChild(reviewContainer);