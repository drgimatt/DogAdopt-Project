import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCountriesComponent } from './show-countries/show-countries.component';
import { ShowCountryComponent } from './show-country/show-country.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateCountryComponent } from './create-country/create-country.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowCountriesComponent,
    ShowCountryComponent,
    CreateCountryComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
