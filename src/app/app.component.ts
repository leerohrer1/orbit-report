import { Component } from '@angular/core';
import { Satellite } from 'src/satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
}
