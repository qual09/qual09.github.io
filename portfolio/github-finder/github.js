// https://github.com/settings/applications/1363981

class GitHub {
  constructor() {
    this.client_id = 'e2c2f9d1e052d1d24dd0';
    this.client_secret = '64536bb35baa7c37934b894e12f3193ddf7b6430';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json();

    return {
      profile //same as profile: profile
    }
  }

}