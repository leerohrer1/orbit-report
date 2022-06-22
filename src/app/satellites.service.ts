import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SatellitesService {

  constructor(private http: HttpClient) { }

  getSatellites(){
  return this.http.get('https://handlers.education.launchcode.org/static/satellites.json');
  }
}
