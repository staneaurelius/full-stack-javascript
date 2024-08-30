import { updateModal } from "./modalHandler";
import { taskManager } from "./todoTasks";
import { format } from "date-fns";

function clearDisplay () {
    const taskContainer = document.querySelector('#tasks');
    while (taskContainer.firstChild) {
        taskContainer.removeChild(taskContainer.firstChild);
    };
};

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

function addTaskListener (container, taskItem, projectName) {
    container.addEventListener('click', (e) => {
        if (e.target.tagName == 'INPUT') {
            taskItem.isFinished = taskItem.isFinished ? false : true;
        };
        updateModal(taskItem, projectName);
    });
};

function createTaskItemContainer (taskItem, projectName) {
    // Create container
    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', taskItem.generateSlug());
    if (taskItem.isFinished) {
        checkbox.setAttribute('checked', '');
    };

    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');

    const detailHeadings = document.createElement('h3');
    detailHeadings.textContent = taskItem.name;

    const detailDue = document.createElement('p');
    detailDue.textContent = `Due: ${taskItem.dueDate}`;

    taskDetails.appendChild(detailHeadings);
    taskDetails.appendChild(detailDue);

    const arrowSvg = createArrowSvg();

    taskItemContainer.appendChild(checkbox);
    taskItemContainer.appendChild(taskDetails);
    taskItemContainer.appendChild(arrowSvg);

    // Add listener and return
    addTaskListener(taskItemContainer, taskItem, projectName);
    return taskItemContainer;
};

function updateHeader (titleContainer, counterContainer, projectName, displayedTasks) {
    const taskCount = displayedTasks.length;
    titleContainer.textContent = projectName;
    counterContainer.textContent = taskCount;
};

function displayTasks (projectName) {
    const displayContainer = document.querySelector('#tasks'),
        tasksTitle = document.querySelector('#project-title'),
        tasksCounter = document.querySelector('#task-counter');

    let displayedTasks;
    if (projectName == 'Today') {
        const projectTasks = taskManager.getTasksByProject('All Tasks');
        displayedTasks = projectTasks.filter((task) => {
            const today = format(new Date(), 'yyyy-MM-dd');
            return task.dueDate == today;
        });
    } else {
        displayedTasks = taskManager.getTasksByProject(projectName);
    };

    for (let i = 0; i < displayedTasks.length; i++) {
        const currentTask = displayedTasks[i];
        const taskContainer = createTaskItemContainer(currentTask, projectName);
        displayContainer.appendChild(taskContainer);
    };

    updateHeader(tasksTitle, tasksCounter, projectName, displayedTasks)
};

export { clearDisplay, displayTasks };