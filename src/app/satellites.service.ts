import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Satellites } from 'src/satellites';

@Injectable({
  providedIn: 'root',
})
export class SatellitesService {
  satellites: any = this.getSatellites();

  constructor(private http: HttpClient) {}

  getSatellites(): Observable<Satellites> {
    const emptyArr: any = [];
    return this.http
      .get<Satellites>(
        'https://handlers.education.launchcode.org/static/satellites.json'
      )
      .pipe(catchError(this.handleError<Satellites>('getSatellites', emptyArr)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  isSpaceDebris(): boolean {
    return (
      this.satellites.satellites
        .filter((e: any) => e.type === 'Space Debris')
        .map((e: any) => {
          console.log('printing');
          e.style.backgroundColor = 'red';
        }).length > 0
    );
  }
}
