import "../css/normalize.css";
import "../css/style.css";
import { projectManager } from "./projects";
import { createTaskItemContainer } from "./documentConstructor";

const initialDisplayHandler = (function () {
    const tasksContainer = document.querySelector('#tasks');
    const allTasks = projectManager.getProject('All Tasks').taskList;

    for (let i = 0; i < allTasks.length; i++) {
        const currentTask = allTasks[i];
        console.log(currentTask.name, currentTask.dueDate);
        const taskContainer = createTaskItemContainer(currentTask.name, currentTask.dueDate);
        tasksContainer.appendChild(taskContainer);
    };
})();