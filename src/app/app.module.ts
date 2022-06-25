import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { OrbitListComponent } from './orbit-list/orbit-list.component';
import { WarningDirective } from './warning.directive';
import { OrbitCountsComponent } from './orbit-counts/orbit-counts.component';
import { SatellitesService } from './satellites.service';
import { SatelliteSearchComponent } from './satellite-search/satellite-search.component';

@NgModule({
  declarations: [
    AppComponent,
    OrbitListComponent,
    WarningDirective,
    OrbitCountsComponent,
    SatelliteSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SatellitesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
