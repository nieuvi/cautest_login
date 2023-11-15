import { expect } from "playwright/test";

export class UserPage {
    private baseURL = 'https://fakestoreapi.com/users';
    private response: Response;

    constructor() {
        this.response = new Response();
    }

    async getRequest() {
        this.response = await fetch(this.baseURL);
        const responseBody = await this.response.json();
        console.log(JSON.stringify(responseBody, null, 2));
    }

    async postRequest() {
        this.response = await fetch(this.baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'John@gmail.com',
                username: 'johnd',
                password: 'm38rmF$',
                name: {
                    firstname: 'John',
                    lastname: 'Doe'
                },
                address: {
                    city: 'kilcoole',
                    street: '7835 new road',
                    number: 3,
                    zipcode: '12926-3874',
                    geolocation: {
                        lat: '-37.3159',
                        long: '81.1496'
                    }
                },
                phone: '1-570-236-7033'
            })
        })
        const responseBody = await this.response.json();
        console.log(JSON.stringify(responseBody, null, 2));
        return responseBody;
    }

    async verifyStatus(int: number) {
        await expect(this.response.status).toBe(int);
    }
}