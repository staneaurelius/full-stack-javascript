import createElement from "./utils.js";
import asadoImg from "../images/asado.png";
import breakfastSetImg from "../images/breakfast-set.png";
import cupcakeImg from "../images/cupcake.png";
import dietSetImg from "../images/diet-set.png";
import noodleImg from "../images/noodle.png";
import pizzaImg from "../images/pizza.png";
import porkImg from "../images/pork-teriyaki.png";
import takoyakiImg from "../images/takoyaki.png";

function generateMenuHeading () {
    const headingContainer = createElement('div', 'menu-heading');
    headingContainer.appendChild(createElement('h1', null, null, 'Explore Our Menu'));
    headingContainer.appendChild(createElement('p', null, null, 'Embark on a culinary journey of tradition and innovation. Each of our dish is a masterpiece of culinary innovation, designed to tantalize your taste buds and celebrate the rich diversity of global flavors. Our menu is thoughtfully crafted to offer a blend of traditional recipes with contemporary twists, using only the freshest, locally sourced ingredients.'));

    return headingContainer;
};

function generateCard (img, imgAlt, headingText, paragraphText) {
    const cardContainer = createElement('div', 'card');
    const foodImage = createElement('img', null, {
        'src' : img,
        'alt' : imgAlt,
        'width' : '150px'
    });

    const cardTextContainer = createElement('div', 'card-text');
    cardTextContainer.appendChild(createElement('h2', null, null, headingText));
    cardTextContainer.appendChild(createElement('p', null, null, paragraphText));

    cardContainer.appendChild(foodImage);
    cardContainer.appendChild(cardTextContainer);
    cardContainer.appendChild(createElement('button', 'card-button', {'type' : 'button'}, '+ Add'));

    return cardContainer;
};

function generateCardGrid () {
    const cardDetails = {
        'images' : [asadoImg, breakfastSetImg, cupcakeImg, dietSetImg, noodleImg, pizzaImg, porkImg, takoyakiImg],
        'imageAlts' : ['Image of asado', 'Image of breakfast set', 'Image of cupcake', 'Image of diet set', 'Image of noodle', 'Image of pizza', 'Image of pork teriyaki', 'Imagi of takoyaki'],
        'headings' : ['Asado', 'Breakfast Set', 'Rainbow Cupcake', 'Diet Set', 'Noodle', 'Pizza', 'Pork Teriyaki', 'Takoyaki'],
        'texts' : [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, iste?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nobis magnam atque eligendi nam error dolore blanditiis quasi, vero libero?',
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus ipsum itaque soluta maiores consequatur perferendis!',
            'Lorem ipsum dolor sit amet.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sed nobis obcaecati vel asperiores corrupti, repudiandae ea perspiciatis officia tempora?',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, dignissimos?',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, doloremque voluptatem blanditiis quidem sequi dolore?'
        ]
    };

    const cardGrid = createElement('div', 'menu-grid');
    for (let i = 0; i < 8; i++) {
        const cardElement = generateCard(
            cardDetails.images[i],
            cardDetails.imageAlts[i],
            cardDetails.headings[i],
            cardDetails.texts[i]
        );

        cardGrid.appendChild(cardElement);
    };

    return cardGrid;
};

export { generateMenuHeading, generateCardGrid };