/**
 * Handles logic related to the task form and task creation.
 */
export default class TaskFormModel {
  /**
   * @param {object} state - Application state instance for managing tasks.
   */
  constructor(state, taskListView) {
    this.taskInput = document.querySelector(".task-input");
    this.taskAddBtn = document.querySelector(".task-add-btn");
    this.state = state;
    this.taskListView = taskListView;
  }

  /**
   * Adds event listener for creating a new task via the form.
   */
  addTask() {
    this.taskAddBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (this.taskInput.value === "") {
        alert("Please enter a task.");
        return;
      }
      this.state.createTasks(this.taskInput.value);
      this.taskInput.value = "";
      this.taskListView.renderTaskList(this.state.tasks);
    });
  }
}
