import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../model/country';
import { Injectable } from '@angular/core';


@Injectable ({providedIn: 'root'})
export class CountryService { //must call mappings found from the mycontroller - backend
    countriesURL : string = ''
    constructor(private http: HttpClient) {
        this.countriesURL = 'http://localhost:18080/api' // base url, specifics is defined in each method
    }
// returns a specific response that would be called using the URL defined in the controller
    public getCountries() : Observable<Country[]> {
        return this.http.get<Country[]> (this.countriesURL + '/countries');
    }

    public getCountry(id : number) : Observable<Country> {
        return this.http.get<Country> (this.countriesURL + '/show-country/' + id.toString());
    }   

    public deleteCountry(id : number) : Observable<Country> {
        return this.http.delete<Country> (this.countriesURL + '/delete-country/' + id.toString());
    } 

    public createCountry(country : Country) : Observable<Country> {
        return this.http.post<Country> (this.countriesURL + '/add-country/', country);
    }     

    public updateCountry(id : number, country : Country ) : Observable<Country> {
        return this.http.put<Country> (this.countriesURL + '/update-country/' + id.toString(), country);
    } 
}
