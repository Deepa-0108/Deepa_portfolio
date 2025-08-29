import { Component, HostBinding, signal } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  standalone: true,
  template: `
    <button (click)="toggle()">
      {{ isDark() ? 'Light Mode' : 'Dark Mode' }}
    </button>
  `
})
export class DarkModeToggleComponent {
  private darkSignal = signal(false);

  @HostBinding('class.dark-mode') get dark() {
    return this.darkSignal();
  }

  isDark() {
    return this.darkSignal();
  }

  toggle() {
    this.darkSignal.set(!this.darkSignal());
    if (this.darkSignal()) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
