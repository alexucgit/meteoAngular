import {booleanAttribute, Component, input} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-meteo-card',
  standalone: true,
  imports: [
    DatePipe
  ],
  template: `
    <div class="flex flex-col justify-center items-center dark:bg-sky-950 dark:hover:bg-sky-800 bg-slate-100 hover:bg-slate-200 rounded p-5 w-full">
      <span class="text-2xl font-bold">{{data()}}<span class="font-normal text-sm"> {{addInformation()}}</span></span>
      <span class="text-sm">{{label()}}</span>
    </div>
  `,
  styles: ``
})
export class MeteoCardComponent {
  data = input.required<string>()
  addInformation = input<string>()
  label = input.required<string>();
}
