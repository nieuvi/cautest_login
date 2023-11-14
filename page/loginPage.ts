import { expect } from '@playwright/test';

export class LoginPage {
    private url = "https://fakestoreapi.com/auth/login";
    private response : Response;

    constructor() {
        this.response = new Response();
    }

    async postRequest () {
        this.response = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
        const responseBody = await this.response.json();
        console.log(responseBody);
    }

    async verifyLogin (rel: number) {
        const actualStatusCode = this.response.status;
        await expect(actualStatusCode).toBe(rel);
    }
}