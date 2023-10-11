package com.rijai.LocationApi.service;

import java.util.List;

import com.rijai.LocationApi.model.Country;

public interface ICountryService {
    List<Country> getCountries();
    Country addCountry(Country country);
    Country updateCountry(long id,Country updatedCountry);
    Country getCountry(long id);
    void deleteCountry(long id);
}