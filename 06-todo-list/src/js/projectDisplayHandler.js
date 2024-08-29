function clearActiveSidebar () {
    const projectSidebars = document.querySelectorAll('.project');
    for (let i = 0; i < projectSidebars.length; i++) {
        const projectTab = projectSidebars[i];
        if (projectTab.classList.contains('active')) {
            projectTab.classList.toggle('active');
            break;
        };
    };
};

function createSquareSvg () {
    const squareSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    squareSvg.setAttribute('viewBox', '0 0 24 24');
    squareSvg.setAttribute('width', '16px');
    squareSvg.setAttribute('height', '16px');

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width', '20');
    rect.setAttribute('height', '20');
    rect.setAttribute('rx', '4');
    rect.setAttribute('fill', 'currentColor');

    const randomRed = Math.random()*255,
        randomGreen = Math.random()*255,
        randomBlue = Math.random()*255;

    rect.style.color = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    squareSvg.appendChild(rect);

    return squareSvg;
};

function createProjectButton (projectName) {
    const buttonElm = document.createElement('button');
    buttonElm.setAttribute('type', 'button');
    buttonElm.classList.add('project');
    buttonElm.classList.toggle('active');

    buttonElm.textContent = projectName;
    buttonElm.insertBefore(createSquareSvg(), buttonElm.firstChild);
    return buttonElm;
};

function updateProjectSidebar (projectName) {
    const projectSidebar = document.querySelector('#my-projects');
    const newProject = createProjectButton(projectName);
    clearActiveSidebar();
    projectSidebar.appendChild(newProject);
};

function recreateSidebar () {
    const sidebarButtons = document.querySelectorAll('.project');
    sidebarButtons.forEach((btn) => {
        btn.replaceWith(btn.cloneNode(true));
    });
};

export { recreateSidebar, clearActiveSidebar, updateProjectSidebar };