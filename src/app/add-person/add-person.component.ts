import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NgFor} from '@angular/common';
import { AddressBookService } from '../services/address-book.service';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [NavBarComponent, NgFor, ReactiveFormsModule],
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css'
})
export class AddPersonComponent {

  addressForm: FormGroup;
  private addressBookService = inject(AddressBookService);
  
  cities = ['Select City', 'Mumbai', 'Delhi', 'Bangalore', 'Kolkata'];
  states = ['Select State', 'Maharashtra', 'Delhi', 'Karnataka', 'West Bengal'];

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', [Validators.required]],
      city: ['Select City', Validators.required],
      state: ['Select State', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    });
  }

  onSubmit() {
    if (this.addressForm.invalid) {
      alert("Please fill all required fields correctly!");
      return;
    }

    // ✅ Call Service to Add Person
    this.addressBookService.addPerson(this.addressForm.value).subscribe({
      next: (response) => {
        console.log("Person added successfully", response);
        alert("Person added successfully!");
        this.resetForm();
      },
      error: (error) => {
        console.error("Error adding person", error);
        alert("Something went wrong!");
      }
    });
  }

  resetForm() {
    this.addressForm.reset();
    this.addressForm.patchValue({
      city: 'Select City',
      state: 'Select State'
    });
  }
}
