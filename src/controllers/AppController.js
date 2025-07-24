import LocalStorage from "../services/LocalStorageService";
import State from "../store/State";
import TaskFormModel from "../models/TaskFormModel";
import TaskListView from "../views/TaskListView";

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
    this.taskListView = new TaskListView(this.state);
    this.taskFormModel = new TaskFormModel(this.state, this.taskListView);
  }

  /**
   * Starts the application.
   * @returns {void}
   */
  init() {
    this.taskListView.renderTaskList(this.state.tasks);
    this.taskFormModel.addTask();
  }
}
