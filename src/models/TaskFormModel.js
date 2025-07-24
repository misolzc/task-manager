/**
 * Model class responsible for handling task form logic and adding tasks.
 */
export default class TaskFormModel {
  /**
   * Initializes the task form model with a given state.
   * @param {State} state - The application state instance for managing tasks.
   */
  constructor(state) {
    this.taskInput = document.querySelector(".task-input");
    this.taskAddBtn = document.querySelector(".task-add-btn");
    this.state = state;
  }

  /**
   * Attaches an event listener to handle adding a new task from the form.
   * Prevents default form submission and delegates task creation to the state.
   * @returns {void}
   */
  addTask() {
    this.taskAddBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.state.createTasks(this.taskInput.value);
    });
  }
}
