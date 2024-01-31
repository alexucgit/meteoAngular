import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="container mx-auto p-0 mb-10">
      <aside class="flex flex-wrap justify-between sm:flex-row gap-5">
        <div class="flex flex-col gap-2 items-center justify-center w-full">
          <div class="flex items-center justify-center gap-8 mt-3">
            <div class="flex items-center justify-center gap-2">
              <a href="https://github.com/alexucgit" target="_blank">
              <svg class="w-6 h-6 text-gray-800 dark:text-white transition  hover:-translate-y-0 hover:scale-150 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" clip-rule="evenodd"/>
              </svg>
            </a>
            <a href="https://github.com/alexucgit" target="_blank">
              GitHub Repo
            </a>
            </div>
            <div class="flex items-center justify-center gap-2">
              <a href="https://alenestola.vercel.app" target="_blank">
                <svg class="w-6 h-6 text-gray-800 dark:text-white transition  hover:-translate-y-0 hover:scale-150 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M11.4 5H5a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-6.4a3 3 0 0 1-1.7-1.6l-3 3A3 3 0 1 1 10 9.8l3-3A3 3 0 0 1 11.4 5Z" clip-rule="evenodd"/>
                  <path fill-rule="evenodd" d="M13.2 4c0-.6.5-1 1-1H20c.6 0 1 .4 1 1v5.8a1 1 0 1 1-2 0V6.4l-6.2 6.2a1 1 0 0 1-1.4-1.4L17.6 5h-3.4a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
                </svg>
              </a>
              <a href="https://alenestola.vercel.app" target="_blank">
                My Personal
              </a>
            </div>
          </div>
        </div>
        <div class="flex gap-3 items-center justify-center w-full">
          <span class="text-sm">a simple web app made with</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Angular_gradient.png/1024px-Angular_gradient.png" alt="angular 17" class="w-5"/>
          <svg viewBox="0 0 50 31" class="text-slate-900 dark:text-white w-5 h-5">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path>
          </svg>
        </div>
      </aside>
    </footer>
  `,
  styles: ``
})
export class FooterComponent {

}
