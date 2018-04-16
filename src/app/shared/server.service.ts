import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {CityModel} from '../../model/city.model';

@Injectable()
export class ServerService {
  constructor(private http: Http, private httpClient: HttpClient) {
  }

  BASE_URL = 'http://192.168.0.185:8080/';

  getServers() {
    return this.http.get(+this.BASE_URL + 'city/get').map((response: Response) => {
      const data = response.json();
      return data;
    });
  }

  getPlayground(city?: string) {
    return this.http.get(this.BASE_URL + 'test/get/' + city).map((response: Response) => {
      const data = response.json();
      return data;
    });
  }

  getAllCity() {
    return this.http.get(this.BASE_URL + 'city/all').map((response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }

  getPlaygroundById(id: number) {
    return this.http.get(this.BASE_URL + 'test/get-one/1').map((response: Response) => {
      const data = response.json();
      return data;
    });
  }

  // GET(path: string) {
  //   return this.http.get(this.BASE_URL + path).map((response: Response) => {
  //     const data = response.json();
  //     return data;
  //   });
  // }

  newMethod() {
    this.httpClient.get<CityModel[]>(this.BASE_URL + 'city/all').map(
      (response) => {
        return response;
      }
    );
  }
}
