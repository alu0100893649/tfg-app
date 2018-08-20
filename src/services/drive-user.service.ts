import { Injectable, NgZone } from "@angular/core";
import * as _ from "lodash";
import { GoogleAuthService } from "ng-gapi/lib/GoogleAuthService";
import { NgGapiClientConfig } from "ng-gapi";
import GoogleUser = gapi.auth2.GoogleUser;

@Injectable()
export class UserService {
    public static SESSION_STORAGE_KEY: string = "accessToken";
    private user: GoogleUser = undefined;

    gapiClientConfig: NgGapiClientConfig;

    constructor(private googleAuthService: GoogleAuthService,
                private ngZone: NgZone) {
    
        this.gapiClientConfig = {
            //client_id creada para la App -> libraries -> DRIVE API
            client_id: "394181648097-l8ssdlpems8isuf3gdlkual2025n4gmv.apps.googleusercontent.com",
            discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
            scope: [
                "https://www.googleapis.com/auth/drive",
                "https://www.googleapis.com/auth/drive.readonly",
                "https://www.googleapis.com/auth/spreadsheets",
                "https://www.googleapis.com/auth/spreadsheets.readonly",
                "https://www.googleapis.com/auth/drive.metadata.readonly",
            ].join(" ")
        };

    }

    public setUser(user: GoogleUser): void {
        this.user = user;
    }

    public getCurrentUser(): GoogleUser {
        return this.user;
    }

    public getGoogleAuthService(){
        return this.googleAuthService;
    }

    public getToken(): string {
        let token: string = sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
        if (!token) {
            throw new Error("no token set , authentication required");
        }
        return sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
    }

    public signIn() {
        this.googleAuthService.getAuth().subscribe((auth) => {
            auth.signIn().then(res => this.signInSuccessHandler(res), err => this.signInErrorHandler(err));
        });
    }

    public signOut(): void {
        this.googleAuthService.getAuth().subscribe((auth) => {
            try {
                auth.signOut();
            } catch (e) {
                console.error(e);
            }
            sessionStorage.removeItem(UserService.SESSION_STORAGE_KEY)
        });
    }

    public isUserSignedIn(): boolean {
        return !_.isEmpty(sessionStorage.getItem(UserService.SESSION_STORAGE_KEY));
    }

    private signInSuccessHandler(res: GoogleUser) {
        this.ngZone.run(() => {
            this.user = res;
            sessionStorage.setItem(
                UserService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
            );
            console.log("signInSuccessHandler -> " + res.getAuthResponse().access_token)
        });
    }

    private signInErrorHandler(err) {
        console.warn(err);
    }

}