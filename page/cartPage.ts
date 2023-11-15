import { expect } from "playwright/test";

export class CartPage {
    private baseURL = 'https://fakestoreapi.com/carts';
    private response: Response;

    constructor () {
        this.response = new Response();
    }

    async getRequest (endpoint: any) {
        this.response = await fetch (this.baseURL + endpoint);
        const responseBody = await this.response.json();
        return responseBody;
    }

    async postRequest () {
        this.response = await fetch (this.baseURL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                userId:5,
                date:'2020-02-03',
                products:[{productId:5,quantity:1},{productId:1,quantity:5}]
            })
        })
        const responseBody = await this.response.json();
        return responseBody;
    }

    async putRequest (endpoint: string) {
        this.response = await fetch (this.baseURL + endpoint, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                userId: 3,
                date: '2019-12-10',
                products:[{productId:1,quantity:3}]
            })
        })
        const responseBody = await this.response.json();
        return responseBody;
    }

    async verifyStatus(int: number) {
        expect(this.response.status).toBe(int);
    }

    async verify(type: string, endpoint: any, int: number){
        const responseBody = await this.getRequest(endpoint);
        console.log(JSON.stringify(responseBody, null, 2));
        switch (type) {
            case 'Id':
                expect (responseBody.id).toBe(int);
            break;
            case 'IdFirst':
                expect (responseBody[0].id).toBe(int);
            break;
            case 'UserId':
                expect (responseBody[0].userId).toBe(int);
            break;
            case 'Length':
                expect (responseBody).toHaveLength(int);
            break;
            case 'Date':
                const startDate = new Date('2020-02-25');
                const endDate = new Date('2020-03-01');
                for (let i = 0; i < responseBody.length; i++) {
                const cartDate = new Date(responseBody[i].date);
                if (cartDate >= startDate && cartDate <= endDate ){
                    console.log(`Date is in date range -- Success`);
                }
                else {
                    console.log(`Date is not in date range -- Fail`);
                }
                console.log(cartDate);
            }
            break;
            case 'UserId':
                expect (responseBody.userId).toBe(int);
                console.log(responseBody.id);
            break;
        }
    }

    async verifyPost() {
        const responseBody = await this.postRequest();
        expect (responseBody.userId).toBe(5);
        console.log(responseBody)
    }

    async verifyPut() {
        const responseBody = await this.putRequest("/7");
        expect (responseBody.userId).toBe(3);
        console.log(responseBody);
    }
}