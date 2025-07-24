/**
 * Handles saving and loading tasks from localStorage.
 */
export default class LocalStorage {
  /**
   * @param {string} [key='tasks'] - The key under which tasks are stored.
   */
  constructor(key = "tasks") {
    this.key = key;
  }

  /**
   * @returns {Array} Array of tasks, or an empty array if none are found or an error occurs.
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
   * @param {Array} tasks - The tasks to save.
   * @throws {Error} If the input is not an array.
   */
  saveTasks(tasks) {
    if (!Array.isArray(tasks)) {
      throw new Error("Task should be an array.");
    }
    localStorage.setItem(this.key, JSON.stringify(tasks));
  }
}
