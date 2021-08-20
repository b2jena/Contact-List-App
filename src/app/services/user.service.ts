import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) {
  }

  // Implement addContacts method using HttpClient for a saving a Contacts details
  addContact(contact:Contact): Observable<any> {
    return  this._http.post<Contact>("http://localhost:3000/contacts",contact);
  }

  // Implement getAllContactss method using HttpClient for getting all Contacts details
  getAllContacts(): Observable<any> {
    return this._http.get<Contact>("http://localhost:3000/contacts");
  }
}
