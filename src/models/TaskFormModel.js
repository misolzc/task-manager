/**
 * Handles logic related to the task form and task creation.
 */
export default class TaskFormModel {
  /**
   * @param {State} state - Application state instance for managing tasks.
   */
  constructor(state) {
    this.taskInput = document.querySelector(".task-input");
    this.taskAddBtn = document.querySelector(".task-add-btn");
    this.state = state;
  }

  /**
   * Adds event listener for creating a new task via the form.
   */
  addTask() {
    this.taskAddBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.state.createTasks(this.taskInput.value);
    });
  }
}
