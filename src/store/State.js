/**
 * Manages and manipulates application state data.
 */
export default class State {
  /**
   * @param {LocalStorage} localStorage - Instance to handle persistence.
   */
  constructor(localStorage) {
    this.localStorage = localStorage;
    this.tasks = this.localStorage.loadTasks();
  }

  /**
   * @param {string} taskText - Text description of the task.
   * @returns {void}
   */
  createTasks(taskText) {
    const newTask = {
      id: Date.now().toString(),
      task: taskText,
      completed: false,
    };

    this.tasks.push(newTask);
    this.localStorage.saveTasks(this.tasks);
  }

  /**
   * @param {string} taskId - ID of the task to delete.
   * @returns {void}
   */
  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.localStorage.saveTasks(this.tasks);
  }

  /**
   * @param {string} taskId - ID of the task to toggle.
   * @returns {void}
   */
  toggleCompleted(taskId) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
      return this.localStorage.saveTasks(this.tasks);
    }
  }

  /**
   * @param {string} status - Status to filter by ('all', 'active', or 'completed').
   * @returns {Array} Filtered array of tasks.
   */
  filterTasks(status) {
    if (status === "active")
      return this.tasks.filter((task) => task.completed === false);
    if (status === "completed")
      return this.tasks.filter((task) => task.completed === true);
    return this.tasks;
  }

  getTasks() {
    return this.tasks;
  }
}
