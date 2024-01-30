import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./shared/navbar.component";
import {MeteoComponent} from "./meteo.component";
import {FooterComponent} from "./shared/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MeteoComponent, FooterComponent],
  template: `
    <app-navbar (cityEmit)="city.set($event)"/>
    <app-meteo [city]="city()"/>
    <app-footer/>
  `,
  styles: [],
})
export class AppComponent {
  city = signal('');
}
