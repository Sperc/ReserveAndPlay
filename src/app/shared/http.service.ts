import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CityModel} from '../../model/city.model';
import {PlaygroundModel} from '../../model/playground.model';

@Injectable()
export class HttpService {

  BASE_URL = 'http://192.168.0.185:8080/';

  constructor(private httpClient: HttpClient) {
  }

  getAllCity() {
    return this.httpClient.get<CityModel[]>(this.BASE_URL + 'city/all').map(
      (response) => {
        console.log(response);
        return response;
      }
    );
  }

  getPlaygroundByCity(cityName: string) {
    return this.httpClient.get<PlaygroundModel[]>(this.BASE_URL + 'test/get/' + cityName).map(
      (response) => {
        console.log(response);
        return response;
      }
    );
  }

  getCityByName(cityName: string) {
    return this.httpClient.get<CityModel>(this.BASE_URL + 'city/' + cityName).map(
      value => {
        return value;

      }
    );
  }

}
