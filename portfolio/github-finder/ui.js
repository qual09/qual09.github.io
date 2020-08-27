class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Display profile
  showProfile(user) {
    this.clearAlert();
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3 mb-2 text-center">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary mb-1">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary mb-1">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success mb-1">Followers: ${user.followers}</span>
            <span class="badge badge-info mb-1">Following: ${user.following}</span>
            <br>
            <ul class="list-group mt-1">
              <li class="list-group-item"><strong>Company</strong>: ${user.company}</li>
              <li class="list-group-item"><strong>Website/Blog</strong>: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
              <li class="list-group-item"><strong>Location</strong>: ${user.location}</li>
              <li class="list-group-item"><strong>Member Since</strong>: ${user.created_at.substring(0, 10)}</li>
            </ul>
          </div>
        </div>      
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Clear profile
  clearProfile() {
    this.clearAlert();
    this.profile.innerHTML = '';
  }

  // Display repos
  showRepos(repos) {
    let output = '';
    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
          <div clas="row">
            <div class="col-md-6 mb-1">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary mb-2">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary mb-2">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success mb-2">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById('repos').innerHTML = output;
  }

  // Show alert message
  showAlert(message, className) {
    // Clear current alerts
    this.clearAlert();
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert alert
    container.insertBefore(div, search);

    // Timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

}