function createArrowSvg () {
    const arrowSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    arrowSvg.setAttribute('width', '16px');
    arrowSvg.setAttribute('height', '16px');
    arrowSvg.setAttribute('viewBox', '0 0 24 24');

    const arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    arrowPath.setAttribute('d', 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z');

    arrowSvg.appendChild(arrowPath);
    return arrowSvg;
};

function createTaskItemContainer (taskName, dueDate, isFinished) {
    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', taskName.toLowerCase().replaceAll(' ', '-'));
    if (isFinished) {
        checkbox.setAttribute('checked', '');
    };

    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');

    const detailHeadings = document.createElement('h3');
    detailHeadings.textContent = taskName;

    const detailDue = document.createElement('p');
    detailDue.textContent = `Due: ${dueDate}`;

    taskDetails.appendChild(detailHeadings);
    taskDetails.appendChild(detailDue);

    const arrowSvg = createArrowSvg();

    taskItemContainer.appendChild(checkbox);
    taskItemContainer.appendChild(taskDetails);
    taskItemContainer.appendChild(arrowSvg);

    return taskItemContainer;
};

export { createTaskItemContainer };