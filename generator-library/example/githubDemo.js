import { HttpClient } from "../library/httpClient.js";
import { AuthProxy } from "../library/authProxy.js";
import { GitHubService } from "../library/githubService.js";

// базовий клієнт
const baseClient = new HttpClient();

// auth provider (імітація)
const authProvider = {
    getToken: async () => "demo-token"
};

// proxy
const clientWithAuth = new AuthProxy(baseClient, authProvider);

// service
const github = new GitHubService(clientWithAuth);

// виклик
github.getUser("octocat")
    .then(console.log)
    .catch(console.error);