import LocalStorage from "../services/LocalStorageService";
import State from "../store/State";
import TaskFormModel from "../models/TaskFormModel";

/**
 * Main controller for initializing and managing application components.
 */
export default class AppController {
  /**
   * Creates a new instance of AppController.
   */
  constructor() {
    this.localStorage = new LocalStorage();
    this.state = new State(this.localStorage);
    this.taskFormModel = new TaskFormModel(this.state);
  }

  /**
   * Starts the application.
   * @returns {void}
   */
  init() {
    this.taskFormModel.addTask();
  }
}
