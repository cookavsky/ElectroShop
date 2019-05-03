import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ElectroShop';

  constructor(private ren: Renderer2) {
  }

  focusBtn = false;
  prevEmptyTrigger;

  buttonFocus(trigger) {
    if (!this.focusBtn) {
      this.focusBtn = true;
      this.prevEmptyTrigger = trigger
      trigger.openMenu();
    } else if (this.prevEmptyTrigger && this.prevEmptyTrigger != trigger) {
      this.prevEmptyTrigger.closeMenu();
      this.prevEmptyTrigger = trigger;
      trigger.openMenu();
    } else {
      this.focusBtn = true;
      this.prevEmptyTrigger = trigger;
      trigger.openMenu();
    }
  }
}
