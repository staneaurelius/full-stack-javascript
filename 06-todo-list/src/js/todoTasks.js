import { format, parseISO, subDays, compareAsc } from "date-fns";

// Task item constructor
const taskItem = function (taskName, taskDesc, taskDue, taskProject, finished) {
    let name = taskName,
        description = taskDesc,
        project = ['All Tasks'],
        dueDate;

    // Variables that needs processing
    const generateSlug = () => name.toLowerCase().replaceAll(' ', '-');

    dueDate = parseISO(taskDue);

    if (taskProject) {
        project.push(taskProject);
    };

    let isFinished = finished ? true : false;

    return { name, generateSlug, description, 'dueDate' : format(dueDate, 'yyyy-MM-dd'), project, isFinished };
};

// Task manager
const taskManager = (function () {
    // Initiate default tasks
    const taskList = [
        taskItem('Learn Website Development', 'Learn how to create a website using HTML, CSS, and JavaScript in the most effective an efficient way.', format(new Date(), 'yyyy-MM-dd'), null, false),

        taskItem('Research CSS Frameworks', 'Conduct some researchs regarding different CSS frameworks, as well as how to utilize them in a project to produce the best styling for my website', format(subDays(new Date(), 3), 'yyyy-MM-dd'), null, true)
    ];

    const getTaskNames = function () {
        return taskList.map((task) => task.name);
    };

    const getTasksByProject = function (project) {
        return taskList.filter((task) => task.project.includes(project));
    };

    const addTask = function (task) {
        taskList.push(task);
    };

    const removeTask = function (taskName) {
        const taskIndex = taskList.indexOf(taskName);
        taskList.splice(taskIndex, 1);
    };

    return { getTasksByProject, addTask, removeTask };
})();

export { taskManager };