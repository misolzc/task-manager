/**
 * Class responsible for rendering the list of task in the DOM.
 */
export default class TaskListView {
  /**
   * @param {object} state - The state object managing tasks and logic.
   */
  constructor(state) {
    this.taskListContainer = document.querySelector(".task-list");
    this.state = state;
  }

  /**
   * Render the task list in the DOM.
   * @param {Array} tasks - An array of task objects to render.
   * @returns {void}
   */
  renderTaskList(tasks) {
    this.taskListContainer.innerHTML = "";

    tasks.forEach((task) => {
      const taskContainer = document.createElement("li");
      taskContainer.className = "task-container";

      const taskText = document.createElement("p");
      taskText.className = "task-text";
      taskText.textContent = task.task;
      taskText.style.textDecoration = task.completed ? "line-through" : "none";

      const taskDelBtn = document.createElement("button");
      taskDelBtn.className = "task-del-btn";
      taskDelBtn.textContent = "X";

      // Event delegation inside the taskContainer
      taskContainer.addEventListener("click", (e) => {
        if (e.target.className === "task-del-btn") {
          this.state.deleteTask(task.id);
          this.renderTaskList(this.state.tasks);
          return;
        }

        this.state.toggleCompleted(task.id);
        this.renderTaskList(this.state.tasks);
      });

      taskContainer.append(taskText, taskDelBtn);
      this.taskListContainer.appendChild(taskContainer);
    });
  }
}
