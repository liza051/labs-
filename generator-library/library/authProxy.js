export class AuthProxy {

    constructor(client, authProvider) {
        this.client = client;
        this.authProvider = authProvider;
    }

    async request(req) {

        const token = await this.authProvider.getToken();

        return this.client.request({
            ...req,
            headers: {
                ...req.headers,
                Authorization: `Bearer ${token}`
            }
        });
    }
}