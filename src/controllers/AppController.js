import LocalStorage from "../services/LocalStorageService";
import State from "../store/State";

/**
 * Main controller class for the application.
 * Responsible for initializing and managing core application flow.
 */
export default class AppController {
  /**
   * Creates a new instance of AppController.
   */
  constructor() {
    this.localStorage = new LocalStorage();
    this.state = new State(this.localStorage);
  }

  /**
   * Initializes the application.
   * This method should be called to start the app.
   * @returns {void}
   */
  init() {}
}
