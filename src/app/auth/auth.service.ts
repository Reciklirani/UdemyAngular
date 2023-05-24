import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {}

    singup() {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZcmIdQROZg3bLvOfIRYDH402fhjJqmFA', 
            {
                email: email,
                password: password,
                returnSecureToken: true
            } );
    }
}