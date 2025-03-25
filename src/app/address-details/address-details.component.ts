import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailsBarComponent } from '../person-details-bar/person-details-bar.component';
import { AddressBookService } from '../services/address-book.service';

@Component({
  selector: 'app-address-details',
  standalone: true,
  imports: [CommonModule, PersonDetailsBarComponent], // ✅ NgFor enable karne ke liye CommonModule add kiya
  templateUrl: './address-details.component.html',
  styleUrl: './address-details.component.css'
})
export class AddressDetailsComponent implements OnInit {
  persons: any[] = []; // ✅ API se data store karega
  private addressBookService = inject(AddressBookService);

  ngOnInit() {
    this.fetchPersons();
  }

  fetchPersons() {
    this.addressBookService.getAllPersons().subscribe({
      next: (data) => this.persons = data,
      error: (err) => console.error('Error fetching persons:', err)
    });
  }
}
