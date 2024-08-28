import "../css/normalize.css";
import "../css/style.css";
import { projectManager } from "./projects";
import { createTaskItemContainer } from "./documentConstructor";

function clearDisplay () {
    const taskContainer = document.querySelector('#tasks');
    while (taskContainer.firstChild) {
        taskContainer.removeChild(taskContainer.firstChild);
    };
};

// Displaying all task given a project and add listener
function updateModal (projectName, taskId) {
    const modalName = document.querySelector('#task-name');
    const modalDesc = document.querySelector('#description');
    const modalDate = document.querySelector('#due-date');
    const finishedSelection = document.querySelector('option[value="true"]');
    const unfinishedSelection =  document.querySelector('option[value="false"]');

    const targetProject = projectManager.getProject(projectName);
    const targetTask = targetProject.getTask(taskId);

    modalName.setAttribute('value', targetTask.name);
    modalDesc.textContent = targetTask.description;
    modalDate.value = targetTask.dueDate;

    if (targetTask.isFinished) {
        unfinishedSelection.removeAttribute('selected');
        finishedSelection.setAttribute('selected', '');
    } else {
        finishedSelection.removeAttribute('selected');
        unfinishedSelection.setAttribute('selected', '');
    };
};

function addTaskListener (taskContainer, projectName, taskId) {
    taskContainer.addEventListener('click', (e) => {
        if (e.target.tagName != 'INPUT') {
            updateModal(projectName, taskId);
        } else {
            const targetProject = projectManager.getProject(projectName);
            const targetTask = targetProject.getTask(taskId);
            targetTask.isFinished = targetTask.isFinished ? false : true;
        };
    });
};

function displayProjectTasks (displayContainer, counter, projectName) {
    const projectTasks = projectManager.getProject(projectName).taskList;

    for (let i = 0; i < projectTasks.length; i++) {
        const currentTask = projectTasks[i];
        const taskContainer = createTaskItemContainer(currentTask.name, currentTask.dueDate, currentTask.isFinished);
        addTaskListener(taskContainer, projectName, currentTask.id);
        displayContainer.appendChild(taskContainer);
    };
};

// Updating counter on the top of the screen
function updateCounter (projectName, counterContainer) {
    const projectTasks = projectManager.getProject(projectName).taskList;
    counterContainer.textContent = projectTasks.length;
};

// Handling display
const displayHandler = (function () {
    const tasksContainer = document.querySelector('#tasks');
    const tasksCounter = document.querySelector('#task-counter');

    displayProjectTasks(tasksContainer, tasksCounter, 'All Tasks');
    updateCounter('All Tasks', tasksCounter);
})();