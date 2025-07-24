export default class TaskFilterModel {
  constructor(state, taskListView) {
    this.filterBtn = document.querySelectorAll(".filter-btn");
    this.state = state;
    this.taskListView = taskListView;
  }

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
