import {Component, EventEmitter, inject, Output, signal} from '@angular/core';
import {ToggleThemeComponent} from "./toggle-theme.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {JsonPipe} from "@angular/common";
import {CityList} from "../model/CityList";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ToggleThemeComponent,
    ReactiveFormsModule,
    JsonPipe
  ],
  template: `
    <div class="navbar dark:bg-slate-700 bg-yellow-200 flex items-center justify-between gap-2">
      <span class="btn btn-ghost text-xl font-bold">ngMeteo</span>
      <div class="flex gap-2">
        <!--<input type="text" placeholder="Milano..." class="input input-sm" [formControl]="city" (keydown.enter)="cityEmit.emit(city.value!)" (keydown)="search()"/>-->
        <input type="text" placeholder="Milano..." class="input input-sm" [formControl]="city" (keydown.enter)="cityEmit.emit(city.value!)"/>
      </div>
      <div><app-toggle-theme/></div>
    </div>
    <div class="w-full flex flex-col" style="z-index: 10000; position: fixed; left:0; top:60px">
      @for (city of cityList(); track city.id){
        <div class="border border-1 dark:bg-slate-700 dark:border-slate-800 bg-yellow-100 border-yellow-300 p-5 text-center" (click)="selectCity(city.name)">
          <p>{{city.name}}</p>
          <p class="text-sm">{{city.country}} - {{city.region}}</p><span></span>
        </div>
      }
    </div>
  `,
  styles: ``
})
export class NavbarComponent {
  @Output('cityEmit') cityEmit = new EventEmitter<string>();
  http = inject(HttpClient);
  city = new FormControl('')
  cityList = signal<CityList[]>([]);

  /**
   * Metodo commentato, da usare decommentando il campo input col keydown
  search(){
    if(this.city.value && this.city.value?.length > 3) {
      this.http.get<CityList[]>('https://api.weatherapi.com/v1/search.json?q=' + this.city.value + '&key=195d83a3dda745c99b9202810242901').subscribe({
        next: res => this.cityList.set(res)
      })
    } else {
      this.cityList.set([]);
    }
  }**/

  selectCity(city: string){
    this.city.setValue(city);
    this.cityEmit.emit(city);
    this.cityList.set([])
  }
}
