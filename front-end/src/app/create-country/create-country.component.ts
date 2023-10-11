import { Component } from '@angular/core';
import { CountryService } from '../service/country-service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.component.html',
  styleUrls: ['./create-country.component.css']
})
export class CreateCountryComponent {

  countryForm: FormGroup;

  constructor(private countryService: CountryService, private fb: FormBuilder, private router: Router) {
    this.countryForm = this.fb.group({
      name: '',
      language: ''
    });
  }


  onSubmit() {
    if (this.countryForm.valid) {
      const Country = this.countryForm.value;
      this.countryService.createCountry(Country).subscribe(
        (response) => {
          // Handle successful response
          console.log('Country created successfully:', response);
          this.countryForm.reset(); // Reset the form
          this.router.navigate(['/countries']);
        },
        (error) => {
          // Handle error
          console.error('Error creating country:', error);
        }
      );
    }
  }

}
