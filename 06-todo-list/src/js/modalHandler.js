function updateModal (taskItem) {
    const displayName = document.querySelector('#task-name'),
        displayDesc = document.querySelector('#description'),
        displayDue = document.querySelector('#due-date'),
        displayUnfinished = document.querySelector('option[value="false"]'),
        displayFinished = document.querySelector('option[value="true"]');

    displayName.value = taskItem.name;
    displayDesc.textContent = taskItem.description;
    displayDue.value = taskItem.dueDate;
    if (taskItem.isFinished) {
        displayUnfinished.removeAttribute('selected');
        displayFinished.setAttribute('selected', '');
    } else {
        displayFinished.removeAttribute('selected');
        displayUnfinished.setAttribute('selected', '');
    };
};

export { updateModal };