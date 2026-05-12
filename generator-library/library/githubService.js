export class GitHubService {

    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    getUser(username) {
        return this.httpClient.request({
            url: `https://api.github.com/users/${username}`
        });
    }
}