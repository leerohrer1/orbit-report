import { Component, OnInit } from '@angular/core';
import { Satellite } from 'src/satellite';
import { SATELLITES } from 'src/satellite-data';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  satellites = SATELLITES;

  constructor() { }

  ngOnInit(): void {
  }

}
