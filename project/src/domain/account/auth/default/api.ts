import { RequestBody, ResponseBody } from '@/shared/apiSchema/paths';
import axios, { AxiosInstance } from 'axios';

export class AuthDefaultClient {
    protected client: AxiosInstance;
    constructor() {
        this.client = axios.create({
            baseURL: 'https://api.example.com', // ここにあなたのAPIのベースURLを設定する
            headers: {
                'Content-Type': 'application/json',
                'x-csrf-token': '',
            },
        });
    }
    async createAuthDefault (dto: RequestBody<'createAuthDefault'>): Promise<string> {
        return this.client.post('/account/auth/default/create', dto)
            .then((response) => {
                const body: ResponseBody<'createAuthDefault'> = response.data;
                return body.data.authId;
            })
            .catch((error) => {
                throw error;
            });
    }
}