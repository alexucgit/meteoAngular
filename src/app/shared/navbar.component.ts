import {Component, EventEmitter, Output} from '@angular/core';
import {ToggleThemeComponent} from "./toggle-theme.component";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ToggleThemeComponent,
    ReactiveFormsModule
  ],
  template: `
    <div class="navbar dark:bg-slate-700 bg-yellow-200 flex items-center justify-between gap-2">
      <span class="btn btn-ghost text-xl font-bold">ngMeteo</span>
      <div class="flex gap-2">
        <input type="text" placeholder="Milano..." class="input input-sm" [formControl]="city" (keydown.enter)="cityEmit.emit(city.value!)" />
        <!--<button class="btn btn-square dark:btn-ghost btn-ghost btn-sm dark:disabled:bg-slate-800 disabled:text-white" (click)="cityEmit.emit(city.value!)" [disabled]="!city.value">
          <svg class="w-4 h-4 dark:text-white text-neutral disabled:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
          </svg>
        </button>-->
      </div>
      <div><app-toggle-theme/></div>
    </div>
  `,
  styles: ``
})
export class NavbarComponent {
  @Output('cityEmit') cityEmit = new EventEmitter<string>();
  city = new FormControl('copertino')
}
