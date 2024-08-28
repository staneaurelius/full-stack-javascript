import { format, parseISO, subDays, compareAsc } from "date-fns";

// For generating task items
const taskItem = function (taskName, taskDesc, taskDue, taskProject, finished) {
    let id = taskName.toLowerCase().replaceAll(' ', '-'),
        name = taskName,
        description = taskDesc,
        project = ['All Tasks'],
        dueDate;

    // Variables that needs processing
    dueDate = parseISO(taskDue);

    if (taskProject) {
        project.push(taskProject);
    };

    let isFinished = finished ? true : false;

    return { id, name, description, 'dueDate' : format(dueDate, 'yyyy-MM-dd'), project, isFinished };
};

// For generating project items
const project = function (projectName) {
    let name = projectName;
    const taskList = [];

    const getTask = function (taskId) {
        const taskIds = taskList.map((task) => task.id);
        const targetId = taskIds.indexOf(taskId);
        return taskList[targetId];
    };

    const addTask = function (task) {
        taskList.push(task);
    };

    const removeTask = function (task) {
        const taskIndex = taskList.indexOf(task);
        taskIndex.splice(taskIndex, 1);
    };

    return { name, taskList, getTask, addTask, removeTask };
};

// Managing projects
const projectManager = (function () {
    // Initiate default projects and add a task
    const allTasksProject = project('All Tasks');
    allTasksProject.addTask(
        taskItem('Learn Website Development', 'Learn how to create a website using HTML, CSS, and JavaScript in the most effective an efficient way.', format(new Date(), 'yyyy-MM-dd'), null, null)
    );
    allTasksProject.addTask(
        taskItem('Research CSS Frameworks', 'Conduct some researchs regarding different CSS frameworks, as well as how to utilize them in a project to produce the best styling for my website', format(subDays(new Date(), 3), 'yyyy-MM-dd'), null, true)
    );

    const projectLists = [
        allTasksProject,
        project('Today'),
        project('This Week')
    ];

    // Function for accessing and modifying projects
    const getProject = function (projectName) {
        const projectNames = projectLists.map((projectItem) => {
            return projectItem.name;  
        });
        
        const projectIndex = projectNames.indexOf(projectName);
        return projectLists[projectIndex];
    };

    const getAllProjects = () => projectLists;

    const addProject = function (name) {
        const projectNames = projectLists.map((projectItem) => {
            return projectItem.name;  
        });

        if (!projectNames.includes(name)) {
            projectLists.push(project(name));
        };
    };

    return { getProject, getAllProjects, addProject };
})();

export { projectManager };