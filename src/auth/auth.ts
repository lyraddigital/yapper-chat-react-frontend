import { WebAuth } from 'auth0-js';

export class AuthClient {
    private _webAuth: WebAuth;

    constructor() {
        console.log('Hopefully we only see this once');
        this._webAuth = new WebAuth({
            clientID: 'fGNPpt1oeLVctIHkUhS0xdvbyr1jHYie',
            domain: 'lyraddigital.au.auth0.com',
            redirectUri: 'http://localhost:3000/sign-up/profile',
            responseType: 'id_token'
        });
    }

    async sendPasswordlessEmail(email: string): Promise<void> {
        return await new Promise((resolve, reject) => {
            this._webAuth.passwordlessStart({
                connection: 'email',
                send: 'code',
                email: email
              }, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    isAuthenticated(): boolean {
        return false;
    }
}