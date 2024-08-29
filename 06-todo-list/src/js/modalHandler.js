import { taskManager } from "./todoTasks";
import { clearDisplay, displayTasks } from "./taskDisplayHandler";

function deleteTask (taskItem, projectName) {
    taskManager.removeTask(taskItem);
    clearDisplay();
    displayTasks(projectName);
    clearModal();
};

function createProjectOption (projectName) {
    const selectContainer = document.querySelector('#project-list'),
        newOption = document.createElement('option');
    newOption.setAttribute('value', projectName);
    newOption.textContent = projectName;

    selectContainer.appendChild(newOption);
};

function saveTask (taskItem, projectName) {
    const displayName = document.querySelector('#task-name').value,
        displayDesc = document.querySelector('#description').value,
        displayDue = document.querySelector('#due-date').value,
        displayFinished = document.querySelector('#project-status').value === "true";
    
    taskItem.name = displayName;
    taskItem.description = displayDesc;
    taskItem.dueDate = displayDue;
    taskItem.isFinished = displayFinished;

    clearDisplay();
    displayTasks(projectName);
    updateModal(taskItem, projectName);
};

function clearModal () {
    const displayName = document.querySelector('#task-name'),
        displayDesc = document.querySelector('#description'),
        displayDue = document.querySelector('#due-date'),
        displayUnfinished = document.querySelector('option[value="false"]'),
        displayFinished = document.querySelector('option[value="true"]');

    displayName.value = null;
    displayDesc.value = null;
    displayDue.value = '2024-01-01';
    displayUnfinished.removeAttribute('selected');
    displayFinished.removeAttribute('selected');
};

function generateModalButtons (taskItem, projectName) {
    const formButtons = document.querySelector('#form-buttons'),
        deleteButton = document.createElement('button'),
        saveButton = document.createElement('button');

    while (formButtons.firstChild) {
        formButtons.removeChild(formButtons.firstChild);
    };

    deleteButton.setAttribute('type', 'button');
    deleteButton.textContent = 'Delete Task';

    saveButton.setAttribute('type', 'submit');
    saveButton.textContent = 'Save Changes';

    deleteButton.addEventListener('click', (e) => {
        deleteTask(taskItem, projectName);
    }, {once : true});

    saveButton.addEventListener('click', (e) => {
        saveTask(taskItem, projectName);
    }, {once : true});

    formButtons.appendChild(deleteButton);
    formButtons.appendChild(saveButton);
};

function updateModal (taskItem, projectName) {
    const displayName = document.querySelector('#task-name'),
        displayDesc = document.querySelector('#description'),
        displayDue = document.querySelector('#due-date'),
        displayProject = document.querySelector('#project-list'),
        displayUnfinished = document.querySelector('option[value="false"]'),
        displayFinished = document.querySelector('option[value="true"]');

    displayName.value = taskItem.name;
    displayDesc.value = taskItem.description;
    displayDue.value = taskItem.dueDate;
    if (taskItem.project.length > 1) {
        const newProjectName = taskItem.project[1];
        if (!document.querySelector(`option[value="${newProjectName}"]`)) {
            createProjectOption(taskItem.project[1]);
        };
        displayProject.value = taskItem.project[1];
    };
    if (taskItem.isFinished) {
        displayUnfinished.removeAttribute('selected');
        displayFinished.setAttribute('selected', '');
    } else {
        displayFinished.removeAttribute('selected');
        displayUnfinished.setAttribute('selected', '');
    };

    // Add buttons
    generateModalButtons(taskItem, projectName);
};

export { updateModal };