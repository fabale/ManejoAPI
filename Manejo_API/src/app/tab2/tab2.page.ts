import { Component, OnInit } from '@angular/core';
import {CountryService} from '../api/country.service';
import { error } from 'util';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  paises: any[] = [];
  errorMessage = '';
  filtro: any[] = [];
  filteredProducts: any[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
this.countryService.obtenerPaises().subscribe(

  paises => {
this.paises = paises;
  }, err  => this.errorMessage = error as any
);
console.log(this.paises);
  }
}
