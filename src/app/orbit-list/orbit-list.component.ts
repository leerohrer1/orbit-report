import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Satellites } from 'src/satellites';
import { SatellitesService } from '../satellites.service';
import { WarningDirective } from '../warning.directive';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css'],
})
export class OrbitListComponent implements OnInit {
  color = 'red';
  public satellites: any = [];

  constructor(private satelliteService: SatellitesService) {}

  ngOnInit(): void {
    this.satelliteService.getSatellites()
      .subscribe(data => this.satellites = data)
  }

  // isSpaceDebris(satellites: Satellite[]): boolean {
  //   return (
  //     satellites
  //       .filter((e) => e.type === 'Space Debris')
  //       .map((e) => (e.type.style.backgroundColor = 'red')).length > 0
  //   );
  // }
}
