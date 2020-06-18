import { WebAuth } from 'auth0-js';

import Config from '../environments/environment';

export class AuthClient {
    private _webAuth: WebAuth;

    constructor() {
        this._webAuth = new WebAuth({
            clientID: Config.auth0Settings.clientID,
            domain: Config.auth0Settings.domain,
            redirectUri: Config.auth0Settings.redirectUri,
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

    async passwordlessLogin(email: string, code: string): Promise<void> {
        return await new Promise((resolve, reject) => {
            this._webAuth.passwordlessLogin({
                connection: 'email',
                verificationCode: code,
                email
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