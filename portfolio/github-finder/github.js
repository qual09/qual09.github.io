// https://github.com/settings/applications/1363981
// client_id = 'e2c2f9d1e052d1d24dd0';
// client_secret = '64536bb35baa7c37934b894e12f3193ddf7b6430';

// https://github.com/settings/tokens (App Token)
// App Token = ghp_UD2qiyzlxYFdltHFUs3alXbrYyeqTM42Y0Z + J

class GitHub {
  constructor() {
    // this.client_id = 'e2c2f9d1e052d1d24dd0';
    // this.client_secret = '64536bb35baa7c37934b894e12f3193ddf7b6430';

    this.config = {
      headers: {
        Authorization: 'token ghp_UD2qiyzlxYFdltHFUs3alXbrYyeqTM42Y0Z' + 'J'
      }
    };

    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    // const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      this.config
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      this.config
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile, //same as profile: profile
      repos //same as repos: repos
    }
  }

}