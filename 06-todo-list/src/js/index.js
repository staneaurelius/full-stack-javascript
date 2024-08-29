import "../css/normalize.css";
import "../css/style.css";
import { taskItem, taskManager } from "./todoTasks.js";
import { clearDisplay, displayTasks } from "./taskDisplayHandler.js";
import { format } from "date-fns";
import { updateModal } from "./modalHandler.js";
import { recreateSidebar, updateProjectSidebar, clearActiveSidebar } from "./projectDisplayHandler.js";

function addSidebarListener () {
    recreateSidebar();
    const sidebarButtons = document.querySelectorAll('.project');
    sidebarButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let targetElm;

            if (e.target.tagName != 'button') {
                targetElm = e.target.closest('button');
            } else {
                targetElm = e.target;
            };

            const buttonText = e.target.lastChild.textContent;
            const cleanText = /\w+\s{0,1}\w+/.exec(buttonText)[0];
            mainHandler.currentProject = cleanText;

            clearActiveSidebar();
            targetElm.classList.toggle('active');
            clearDisplay();
            displayTasks(mainHandler.currentProject);
        });
    });
};

const mainHandler = (function () {
    const allProjects = ['All Tasks', 'Today', 'This Week'];
    let currentProject = 'All Tasks';
    displayTasks(currentProject);

    // Add task button
    const addTaskButton = document.querySelector('#add-task');
    addTaskButton.addEventListener('click', (e) => {
        const newTask = taskItem('New Task', null, format(new Date(), 'yyyy-MM-dd'), currentProject, false);
        taskManager.addTask(newTask);
        clearDisplay();
        displayTasks(currentProject);
        updateModal(newTask, currentProject);
    });

    // Change sidebar
    addSidebarListener();

    // Add project button
    const addProjectButton = document.querySelector('#add-project');
    addProjectButton.addEventListener('click', (e) => {
        currentProject = prompt("Please enter project name", "New Project");
        allProjects.push(currentProject);
        
        updateProjectSidebar(currentProject);
        clearDisplay();
        displayTasks(currentProject);
        addSidebarListener();
    });

    return { currentProject };
})();