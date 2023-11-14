import { DataTable } from "@cucumber/cucumber";
import { expect } from '@playwright/test';

export class APIPage {
    private baseURL = 'https://fakestoreapi.com/products';
    private response: Response;

    constructor() {
        this.response = new Response();
    }

    async getRequest(id: any) {
        this.response = await fetch(this.baseURL + id);
        const responseBody = await this.response.json();
        //console.log(responseBody);
        return responseBody;
    }

    async postRequest() {
        const data = {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }
        this.response = await fetch(this.baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        const responseBody = await this.response.json();
        return responseBody;
    }

    async putRequest(id: any) {
        const data = {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }
        this.response = await fetch(this.baseURL + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseBody = await this.response.json();
        return responseBody;
    }

    async deleteRequest(id: any) {
        this.response = await fetch(this.baseURL + id, {
            method: 'DELETE'
        })
        const responseBody = await this.response.json();
        console.log(responseBody);
    }

    async verifyStatus(status: number) {
        const actualStatusCode = this.response.status;
        await expect(actualStatusCode).toBe(status);
    }

    async containBodyget(id: any, table: DataTable) {
        const responseBody = await this.getRequest(id);
        expect(responseBody).toMatchObject(table.rowsHash());
        console.log(table.rowsHash());
    }

    async containBodypost(int: number, table: DataTable) {
        const responseBody = await this.postRequest();
        expect(responseBody.id).toBe(int);
        expect(responseBody).toMatchObject(table.rowsHash());
        console.log(responseBody);
    }

    async containBodyput(endpoint: any, int: number, table: DataTable) {
        const responseBody = await this.putRequest(endpoint);
        expect(responseBody.id).toBe(int);
        expect(responseBody).toMatchObject(table.rowsHash());
        console.log(responseBody);
    }

    async verifyLength(id: any, quantity: number) {
        const responseBody = await this.getRequest(id);
        expect(responseBody).toHaveLength(quantity);
        console.log(responseBody);
    }
}