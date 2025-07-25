/**
 * Manages task filtering via filter buttons in the UI.
 */
export default class TaskFilterModel {
  /**
   *
   * @param {object} state
   * @param {object} taskListView
   */
  constructor(state, taskListView) {
    this.filterBtn = document.querySelectorAll(".filter-btn");
    this.state = state;
    this.taskListView = taskListView;
  }

  /**
   * Filters tasks by status and updates the task list view.
   */
  handleFilterClick() {
    this.filterBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.filterBtn.forEach((b) => {
          b.classList.remove("active");
          b.setAttribute("aria-pressed", "false");
        });

        const clickedBtn = e.currentTarget;
        clickedBtn.classList.add("active");
        clickedBtn.setAttribute("aria-pressed", "true");

        const status = e.target.dataset.filter;
        const filteredTasks = this.state.filterTasks(status);
        this.taskListView.renderTaskList(filteredTasks);
      });
    });
  }
}
