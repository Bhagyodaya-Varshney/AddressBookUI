import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  private baseUrl = 'http://localhost:8080'; // ✅ Backend API URL

  private http = inject(HttpClient); // ✅ Use inject() instead of constructor

  // ✅ Get all persons
  getAllPersons(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAddress`);
  }

  // ✅ Add new person
  addPerson(person: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addAddress`, person);
  }
}
