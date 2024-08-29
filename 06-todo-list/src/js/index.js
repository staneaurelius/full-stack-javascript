import "../css/normalize.css";
import "../css/style.css";
import { taskManager } from "./todoTasks.js";
import { clearDisplay, displayTasks } from "./taskDisplayHandler.js";

// Handling display
const displayHandler = (function () {
    displayTasks('All Tasks');
})();