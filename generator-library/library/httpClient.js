export class HttpClient {

    async request({ url, method = "GET" }) {

        const response = await fetch(url, { method });

        if (!response.ok) {
            throw new Error("HTTP error");
        }

        return response.json();
    }
}