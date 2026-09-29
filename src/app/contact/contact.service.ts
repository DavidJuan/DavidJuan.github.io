import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { Contact } from "../model/contact.model";
import { environment } from "../../environments/environment";

interface IFormSubmitResponse {
    success: string | boolean;
    message?: string;
}

@Injectable({ providedIn: "root" })
export class ContactService {

    constructor(private http: HttpClient) { }

    /*
     * Sends the message to the owner's inbox. FormSubmit answers HTTP 200 with success "false"
     * for rejected messages (e.g. while the form is not activated yet), so that case is an error too.
     */
    sendContact(contact: Contact, subject: string): Observable<IFormSubmitResponse> {
        const headers = new HttpHeaders({ "Content-Type": "application/json", Accept: "application/json" });
        const body = {
            name: contact.name,
            email: contact.email,
            message: contact.message,
            _replyto: contact.email,
            _subject: subject,
            _template: "table",
            _honey: contact.honeypot || ""
        };

        return this.http.post<IFormSubmitResponse>(environment.contactFormEndpoint, body, { headers }).pipe(
            mergeMap(response => String(response?.success) === "true"
                ? [response]
                : throwError(response))
        );
    }
}
