import { Component, OnInit } from '@angular/core';
import { Country } from '../model/country';
import { CountryService } from '../service/country-service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {
  countryForm: FormGroup;
  country: Country = new Country();
  countryID: number;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {  this.countryForm = this.fb.group({
    id: '',
    name: '',
    language: ''
  });
  this.countryID = -1;}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.countryID = id;
        this.countryService.getCountry(id).subscribe(data => {
          this.country = data;
          this.initializeForm();
        });
      }
    });
  }

  initializeForm(): void {
    this.countryForm = this.fb.group({
      id: this.country.id,
      name: this.country.name,
      language: this.country.language
    });
  }

  onSubmit(): void {
    if (this.countryForm.valid) {
      const updatedCountry = this.countryForm.value;
      this.countryService.updateCountry(this.countryID, updatedCountry).subscribe(
        (response) => {
          console.log('Country updated successfully:', response);
          this.router.navigate(['/countries']);
        },
        (error) => {
          console.error('Error updating country:', error);
        }
      );
    }
  }

  executeDeleteFunction(): void {
    this.countryService.deleteCountry(this.countryID).subscribe(data => {
      console.log('Country deleted successfully:', data);
      this.router.navigate(['/countries']);
    });
  }
}
