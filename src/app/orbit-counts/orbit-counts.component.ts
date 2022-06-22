import { Component, OnInit } from '@angular/core';
import { SatellitesService } from '../satellites.service';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  public satellites: any = [];

  constructor(private satelliteService: SatellitesService) {}

  ngOnInit(): void {
    this.satelliteService.getSatellites()
      .subscribe(data => this.satellites = data)
  }

}
