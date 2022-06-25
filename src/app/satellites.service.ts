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
  satellitesArr: Object[] = this.satellites.satellites;
  satellitesUrl: string =
    'https://handlers.education.launchcode.org/static/satellites.json';

  constructor(private http: HttpClient) {}

  getSatellites(): Observable<Satellites> {
    const emptyArr: any = [];
    return this.http
      .get<Satellites>(this.satellitesUrl)
      .pipe(
        catchError(this.handleError<Satellites>('getSatellites', emptyArr))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  searchSatellites(term: string): Observable<Satellites> {
    const emptyArr1: any = [];
    const emptyArr2: any = [];

    if (!term.trim()) {
      return of(emptyArr1);
    }
    return this.http.get<Satellites>(`${this.satellitesUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Satellites>('searchSatellites', emptyArr2))
    );
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
