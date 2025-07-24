/**
 * Class to manage and manipulate app state data.
 */
export default class State {
  /**
   *Create a state instance.
   * @param {LocalStorage} localStorage - An instance of localStorage for loading and saving tasks.
   */
  constructor(localStorage) {
    this.localStorage = localStorage;
    this.tasks = this.localStorage.loadTasks();
  }

  /**
   * Create a new task and add it to the task list.
   * @param {string} taskText - The text description of the task to create.
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
   * Delete a task from the task list.
   * @param {string} taskId - The id of the task to delete.
   */
  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.localStorage.saveTasks(this.tasks);
  }

  /**
   * Toggle the completed status of a task.
   * @param {string} taskId - The id of the task to toggle.
   * @returns {Array}
   */
  toggleCompleted(taskId) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
      return this.localStorage.saveTasks(this.tasks);
    }
  }

  /**
   * Filter tasks by status.
   * @param {string} status - The status to filter tasks by ('all', 'active', or 'competed').
   * @returns {Array} Filtered array of tasks based on the given status.
   */
  filterTasks(status) {
    if (status === "active")
      return this.tasks.filter((task) => task.completed === false);
    if (status === "completed")
      return this.tasks.filter((task) => task.completed === true);
    return this.tasks;
  }
}
