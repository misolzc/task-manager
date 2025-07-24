/**
 * Class to handle saving and loading tasks from localStorage.
 */
export default class LocalStorage {
  /**
   * Create a localStorage instance.
   * @param {string} key - localStorage key to use (default: 'tasks').
   */
  constructor(key = "tasks") {
    this.key = key;
  }

  /**
   * Load tasks array from localStorage.
   * @returns {Array} Array - Array of task, or empty array if none found or error occurs.
   */
  loadTasks() {
    try {
      const tasks = localStorage.getItem(this.key);
      return tasks ? JSON.parse(tasks) : [];
    } catch (error) {
      console.error(error.message);
      return [];
    }
  }

  /**
   * Save tasks array to localStorage.
   * @param {Array} tasks - Array of tasks to save.
   * @throws {Error} Throws error if tasks is not an array.
   */
  saveTasks(tasks) {
    if (!Array.isArray(tasks)) {
      throw new Error("Task should be an array.");
    }
    localStorage.setItem(this.key, JSON.stringify(tasks));
  }
}
