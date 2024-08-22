import createElement from "./utils";

function generateLogoSvg () {
    const logoSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    logoSvg.setAttribute('width', '150px');
    logoSvg.setAttribute('height', '150px');
    logoSvg.setAttribute('viewBox', '0 0 24 24');

    // Generate Circle and Path
    const outerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    outerCircle.setAttribute('r', '11');
    outerCircle.setAttribute('cx', '12');
    outerCircle.setAttribute('cy', '12');
    outerCircle.setAttribute('fill', 'none');
    outerCircle.setAttribute('stroke', 'currentColor');
    outerCircle.setAttribute('stroke-width', '0.5');

    const logoPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    logoPath.setAttribute('d', 'M15 0L14.38 1.37L13 2L14.38 2.63L15 4L15.63 2.63L17 2L15.63 1.37L15 0M10.5 2L9.41 4.41L7 5.5L9.41 6.59L10.5 9L11.6 6.59L14 5.5L11.6 4.41L10.5 2M18.89 5.14C17.56 5.06 16.04 5.65 14.84 6.84C13.25 8.43 12.75 10.58 13.46 12.11L3.7 21.87L5.11 23.28L12 16.41L18.88 23.29L20.29 21.88L13.41 15L14.88 13.53C16.41 14.24 18.56 13.74 20.15 12.15C22.06 10.24 22.43 7.5 20.96 6.03C20.41 5.5 19.68 5.19 18.89 5.14M3.91 5.5C2.35 7.06 2.35 9.59 3.91 11.16L8.1 15.34L10.93 12.5L3.91 5.5Z');
    logoPath.setAttribute('fill', 'currentColor');
    logoPath.setAttribute('transform', 'scale (0.7) translate (5.5 4.5)');

    logoSvg.appendChild(outerCircle);
    logoSvg.appendChild(logoPath);
    return logoSvg;
};

function generateSummarySection () {
    const summaryContainer = createElement('div', 'summary');

    summaryContainer.appendChild(generateLogoSvg());
    summaryContainer.appendChild(createElement('h1', null, null, 'Experience Culinary Excellence'));
    summaryContainer.appendChild(createElement('p', null, null, "We believe dining is more than just a meal—it's an experience. Our restaurant is a celebration of culinary artistry where tradition meets innovation, bringing you a menu that is as diverse as it is delicious. We're dedicated to creating unforgettable moments through food that excites the senses and delights the palate."));

    return summaryContainer;
};

function generateJourneySection () {
    const journeyContainer = createElement('div', 'journey');

    journeyContainer.appendChild(createElement('h2', null, null, 'Our Journey'));
    journeyContainer.appendChild(createElement('p', null, null, 'Founded with a passion for extraordinary cuisine, FeastFusion was born from a desire to blend classic flavors with modern techniques. Our team of skilled chefs and dedicated staff share a love for crafting dishes that tell a story. Each plate is meticulously prepared using the freshest ingredients, carefully sourced to ensure the highest quality and flavor.'));
    journeyContainer.appendChild(createElement('p', null, null, 'We believe in the art of fusion—not just in combining ingredients, but in merging cultures, traditions, and inspirations. Our menu reflects a harmonious blend of global influences, offering a culinary journey that spans continents while remaining rooted in authenticity. From our signature dishes to seasonal specials, every creation at FeastFusion is designed to surprise and delight.'));
    journeyContainer.appendChild(createElement('p', null, null, 'At FeastFusion, we are committed to providing exceptional service and a warm, inviting atmosphere. Whether you’re joining us for a casual meal with friends, a romantic dinner, or a special celebration, we strive to make every visit memorable. Our goal is to create a dining experience that is both refined and approachable, where every guest feels like a cherished part of our family.'));
    journeyContainer.appendChild(createElement('h2', null, null, 'Thankyou For Being Part of Our Story'));

    return journeyContainer;
};

export { generateSummarySection, generateJourneySection };