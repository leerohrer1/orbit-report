import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SatellitesService } from '../satellites.service';
import { WarningDirective } from '../warning.directive';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css'],
})
export class OrbitListComponent implements OnInit {
  public satellites: any = [];

  constructor(private satelliteService: SatellitesService) {}

  ngOnInit(): void {
    this.satellites = this.satelliteService
      .getSatellites()
      .subscribe((data) => (this.satellites = data));
  }
}
