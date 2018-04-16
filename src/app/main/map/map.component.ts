import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {ActivatedRoute} from '@angular/router';
import {PlaygroundModel} from '../../../model/playground.model';
import {HttpService} from '../../shared/http.service';
import {CityModel} from '../../../model/city.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  myControl: FormControl = new FormControl();

  actualCity: CityModel;
  cityName: string;
  playgroundList: PlaygroundModel[];
  filteredOptions: Observable<string[]>;
  options = ['one', 'two'];
  latitude: number;
  longitude: number;

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
    this.cityName = this.activatedRoute.snapshot.params['city'];
    this.getActualCity();
    this.httpService.getPlaygroundByCity(this.cityName).subscribe(value => {
      this.playgroundList = value;
    });
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  getActualCity() {
    this.httpService.getCityByName(this.cityName).subscribe(value => {
        this.actualCity = value;
        this.latitude = this.actualCity.latitude;
        this.longitude = this.actualCity.longitude;
      }
    );
  }


}
