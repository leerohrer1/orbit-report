import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Satellites } from 'src/satellites';
import { SatellitesService } from '../satellites.service';

@Component({
  selector: 'app-satellite-search',
  templateUrl: './satellite-search.component.html',
  styleUrls: ['./satellite-search.component.css'],
})
export class SatelliteSearchComponent implements OnInit {
  satellites$!: Observable<Satellites>;
  private searchTerms = new Subject<string>();

  constructor(private satellitesService: SatellitesService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.satellites$ = this.searchTerms.pipe(
      debounceTime(300), distinctUntilChanged(), switchMap((term: string) => this.satellitesService.searchSatellites(term)),
      tap((e => e.satellites))
      );
  }
}
