import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {Observable} from 'rxjs/Observable';
import {HttpService} from '../../shared/http.service';
import {CityModel} from '../../../model/city.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  myControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;
  cityModelList: CityModel[];
  listOfCity = new Array();
  selectedCity: string;
  correctCity = true;

  constructor(private httpService: HttpService, private router: Router) {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
    this.getAllCity();
  }

  getAllCity() {
    this.httpService.getAllCity().subscribe(
      (response) => {
        this.cityModelList = response;
        this.cityModelList.filter(city => {
          this.listOfCity.push(city.name);
        });
      }
    );
    console.log(this.listOfCity);
  }

  filter(val: string): string[] {
    return this.listOfCity.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  openMapComponentBtn(cityName: string) {
    if (this.listOfCity.includes(cityName)) {
      this.correctCity = true;
      this.navigateToCity(cityName);
    } else {
      this.correctCity = false;
    }
  }

  navigateToCity(cityName: string) {
    this.router.navigate(['/city/' + cityName]);
  }

}
