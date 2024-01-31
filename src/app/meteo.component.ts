import {Component, effect, inject, input, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment.development";
import {Meteo} from "./model/Meteo";
import {DatePipe, JsonPipe} from "@angular/common";
import {MeteoCardComponent} from "./meteo-card.component";

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [
    JsonPipe,
    DatePipe,
    MeteoCardComponent
  ],
  template: `
    <div class="md:container md:mx-auto p-10">
      @if (loading){
        <div class="flex justify-center">
          <span class="loading loading-ring loading-lg"></span>
        </div>
      }
      @if(!error() && !loading){
        @if (meteo(); as meteo) {
          <div class="border border-1 dark:border-slate-700 dark:bg-slate-700 dark:hover:bg-sky-700 hover:bg-gray-200 rounded-2xl w-full flex-wrap p-5 flex items-center justify-between">
            <div class="flex flex-col items-center md:w-1/2 w-full  justify-center">
              <p class="text-2xl font-bold text-center">{{meteo.location.name}}</p>
              <p class="text-normal">{{meteo.location.region}} - {{meteo.location.country}}</p>
              <p class="text-sm">lat: {{meteo.location.lat}}, lon: {{meteo.location.lon}}</p>
            </div>
            <div class="flex items-center md:w-1/2 w-full justify-center">
                <img [src]="meteo.current.condition.icon" [alt]="meteo.current.condition.text">
                <span class="text-2xl font-bold">{{meteo.current.condition.text}}</span>
            </div>
          </div>
          <div class="border border-1 dark:border-sky-800 rounded-2xl mt-5 w-full flex flex-wrap p-5">
            <div class="w-1/2 sm:w-1/3 p-1">
              <app-meteo-card [data]="meteo.current.temp_c.toString()+'°'" addInformation="" label="Temperatura"/>
            </div>
            <div class="w-1/2 sm:w-1/3 p-1">
              <app-meteo-card [data]="meteo.current.wind_kph.toString()" addInformation="km/h" label="Vento"/>
            </div>
            <div class="w-1/2 sm:w-1/3 p-1">
              <app-meteo-card [data]="meteo.current.wind_dir.toString()" addInformation="" label="Direzione"/>
            </div>
            <div class="w-1/2 sm:w-1/3 p-1">
              <app-meteo-card [data]="meteo.current.humidity.toString()" addInformation="%" label="Umidità"/>
            </div>
            <div class="w-1/2 sm:w-1/3 p-1">
              <app-meteo-card [data]="meteo.current.vis_km.toString()" addInformation="km" label="Visibilità"/>
            </div>
            <div class="w-1/2 sm:w-1/3 p-1">
              <app-meteo-card [data]="meteo.current.uv.toString()" addInformation="" label="Raggi UV"/>
            </div>
            <div class="w-1/2 sm:w-1/3 p-1">
              <app-meteo-card [data]="meteo.current.cloud.toString()" addInformation="%" label="Nuvolosità"/>
            </div>
            <div class="w-1/2 xs:w-full sm:w-1/3 p-1">
              <app-meteo-card [data]="meteo.current.precip_mm.toString()" addInformation="mm" label="Precipitazioni"/>
            </div>
            <div class="w-full sm:w-1/3 p-1">
              <div class="flex flex-col justify-center items-center dark:bg-sky-950 dark:hover:bg-sky-800 bg-slate-100 hover:bg-slate-200 rounded p-5 w-full">
                <span class="text-2xl font-bold h-full">{{meteo.current.last_updated | date : 'HH:mm'}}</span>
                <span class="text-sm">Ultimo aggiornamento</span>
              </div>
            </div>
          </div>
          <div class="mt-5 w-full flex-wrap flex items-center justify-between">
            @for (fore of meteo.forecast.forecastday; track $index) {
              <div class="w-full sm:w-1/3 p-1">
                <div class="flex flex-col items-center w-full justify-center rounded-2xl p-3">
                  <img [src]="fore.day.condition.icon" [alt]="fore.day.condition.text"/>
                  <span class="font-bold">{{fore.day.condition.text}}</span>
                  <span class="text-sm">{{fore.date | date: 'dd/MM/yyyy'}}</span>
                  <div class="flex gap-2">
                    <div class="flex">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19V5m0 14-4-4m4 4 4-4"/>
                      </svg>
                      {{fore.day.mintemp_c}}°
                    </div>
                    <div class="flex">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v13m0-13 4 4m-4-4-4 4"/>
                      </svg>
                      {{fore.day.maxtemp_c}}°
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        } @else {
          <div class="">
            <div class="border border-1 dark:border-sky-800 rounded-2xl mt-5 w-full flex-wrap p-5 flex justify-center items-center gap-3">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.6-8.5h0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
              Non hai ancora inserito il nome di una città!
            </div>
          </div>
        }
      }
      @if (error()){
        <div class="bg-error rounded-2xl text-white p-5 text-center">
          {{error()}}
        </div>
      }
    </div>
  `,
  styles: ``
})
export class MeteoComponent {
  city = input.required<string>();
  meteo = signal<Meteo | null>(null)
  error = signal<string | null>(null);
  loading = false;
  http = inject(HttpClient)
  constructor() {
    effect(() => {
      if(this.city() === '') return;
      this.loading = true;
      this.http.get<Meteo>('https://api.weatherapi.com/v1/forecast.json?q=' + this.city() + '&days=3&lang=it&key=' + environment.apiKeyMeteo).subscribe({
        next: res => {
          this.meteo.set(res);
          this.error.set(null);
          this.loading = false;
        },
        error: err => {
          this.meteo.set(null)
          this.error.set(err.error.error.message)
          this.loading = false;
        }
      })
      console.log("richiamo endpoint con city ", this.city())
    });
  }
}
