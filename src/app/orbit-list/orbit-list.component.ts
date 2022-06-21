import { Component, OnInit } from '@angular/core';
import { Satellite } from 'src/satellite';
import { WarningDirective } from '../warning.directive';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css'],
})
export class OrbitListComponent implements OnInit {
  color = 'red';

  satellites: Satellite[] = [
    {
      name: 'Sirius 1',
      type: 'Communication',
      operational: true,
      orbitType: 'low',
      launchDate: '2007-11-17',
    },
    {
      name: 'Vanguard 1',
      type: 'Probe',
      operational: false,
      orbitType: 'high',
      launchDate: '1958-03-17',
    },
    {
      name: 'SNAP 10-A',
      type: 'Space Station',
      operational: false,
      orbitType: 'high',
      launchDate: '1965-11-01',
    },
    {
      name: 'Hubble Space Telescope',
      type: 'Telescope',
      operational: true,
      orbitType: 'low',
      launchDate: '1990-05-24',
    },
    {
      name: 'Envisat',
      type: 'Probe',
      operational: false,
      orbitType: 'low',
      launchDate: '2002-03-01',
    },
    {
      name: 'Thermal Blanket',
      type: 'Space Debris',
      operational: false,
      orbitType: 'low',
      launchDate: 'N/A',
    },
    {
      name: 'Morelos III',
      type: 'Communication',
      operational: true,
      orbitType: 'low',
      launchDate: '2012-12-19',
    },
    {
      name: 'IIR-M',
      type: 'Positioning',
      operational: true,
      orbitType: 'low',
      launchDate: '2007-08-17',
    },
    {
      name: 'ISS',
      type: 'Space Station',
      operational: true,
      orbitType: 'low',
      launchDate: '1998-11-20',
    },
    // my sons asked if they could add their own satellites:
    // {"name": "Night", "type": "Sword", "operational": true, "orbitType": "low", "launchDate": "2018-08-10" },
    // {"name": "B-2", "type": "Pokeball", "operational": true, "orbitType": "high", "launchDate": "2015-03-13" }
  ];
  constructor() {}

  ngOnInit(): void {
  }

  // isSpaceDebris(satellites: Satellite[]): boolean {
  //   return (
  //     satellites
  //       .filter((e) => e.type === 'Space Debris')
  //       .map((e) => (e.type.style.backgroundColor = 'red')).length > 0
  //   );
  // }
}
