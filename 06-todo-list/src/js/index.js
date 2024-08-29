import "../css/normalize.css";
import "../css/style.css";
import { taskManager } from "./todoTasks.js";
import { clearDisplay, createTaskItemContainer, updateHeader } from "./taskDisplayHandler.js";

// Displaying all task given a project and add listener
function displayProjectTasks (displayContainer, projectName) {
    const projectTasks = taskManager.getTasksByProject(projectName);

    for (let i = 0; i < projectTasks.length; i++) {
        const currentTask = projectTasks[i];
        const taskContainer = createTaskItemContainer(currentTask);
        displayContainer.appendChild(taskContainer);
    };
};

// Handling display
const displayHandler = (function () {
    const tasksTitle = document.querySelector('#project-title'),
        tasksCounter = document.querySelector('#task-counter'),
        tasksContainer = document.querySelector('#tasks')

    updateHeader(tasksTitle, tasksCounter, 'All Tasks');
    displayProjectTasks(tasksContainer, 'All Tasks');
})();