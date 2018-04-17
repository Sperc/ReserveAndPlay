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
  latitude: number;
  longitude: number;
  listAddres = new Array();
  zoom = 13;
  playground: PlaygroundModel;
  listAddresMap = new Map<string, PlaygroundModel>();

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
      this.playgroundList.filter(
        value2 => {
          this.listAddres.push(value2.streetName + ' ' + value2.streetNumber);
          this.listAddresMap.set(value2.streetName + ' ' + value2.streetNumber, value2);
        }
      );
    });
    console.log(this.listAddresMap);
  }

  filter(val: string): string[] {
    return this.listAddres.filter(option =>
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

  findPlaygroundInMap(addres: string) {
    return this.listAddresMap.get(addres);
  }

  moveCamera(addres: string) {
    this.playground = this.findPlaygroundInMap(addres);
    this.latitude = this.playground.latitude;
    this.longitude = this.playground.longitude;
    this.zoom = 18;
  }


}
