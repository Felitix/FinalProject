const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach(function (btn) {
      btn.classList.remove('active');
    });

    button.classList.add('active');

    projectItems.forEach(function (project) {
      const projectCategory = project.dataset.category;

      if (selectedCategory === 'all' || selectedCategory === projectCategory) {
        project.classList.remove('hidden');
      } else {
        project.classList.add('hidden');
      }
    });
  });
});

const detailButtons = document.querySelectorAll('.project-details-btn');

const projectModal = document.getElementById('projectModal');

if (projectModal) {
  detailButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const title = button.dataset.title;
      const location = button.dataset.location;
      const description = button.dataset.description;

      document.getElementById('projectModalLabel').textContent = title;
      document.getElementById('projectModalLocation').textContent = location;
      document.getElementById('projectModalDescription').textContent =
        description;

      const modal = bootstrap.Modal.getOrCreateInstance(projectModal);
      modal.show();
    });
  });
}
