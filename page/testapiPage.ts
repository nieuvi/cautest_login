import { page } from "../hooks/hooks";
import { expect } from '@playwright/test';

export class APIPage {
    private baseURL = 'https://fakestoreapi.com/products';
    private response: Response;

    constructor() {
        this.response = new Response();
    }

    async navigate() {
        await page.goto(`${this.baseURL}`);
    }

    async getRequestAll(id: any) {
        try {
            this.response = await fetch(this.baseURL+"/"+id);
            const responseBody = JSON.parse(await this.response.text())
            console.log(responseBody);
        } 
        catch (error) {
            console.error(error);
        }
    }

    async verifyStatus(status:number) {
        const actualStatusCode = this.response.status;
        await expect(actualStatusCode).toBe(status);
    }
}