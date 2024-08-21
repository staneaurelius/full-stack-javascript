export default function createElement (name, className = null, attr = null, text = null, innerHtml = null) {
    const generatedElement = document.createElement(name);
    if (className) {
        generatedElement.classList.add(className);  
    };

    if (attr) {
        for (const [key, value] of Object.entries(attr)) {
            generatedElement.setAttribute(key, value);
        };
    };

    if (text) {
        generatedElement.textContent = text;
    };

    if (innerHtml) {
        generatedElement.innerHTML = innerHtml;  
    };

    return generatedElement;
};