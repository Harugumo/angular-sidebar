import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, NgClass],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  collapsed = input<boolean>(false);
  screenWidth = input<number>(0);

  getMainClass(): string {
    let styleClass = '';

    if (this.collapsed() && this.screenWidth() > 768) {
      styleClass = 'main-trimmed';
    } else if (
      this.collapsed() &&
      this.screenWidth() <= 768 &&
      this.screenWidth() < 0
    ) {
      styleClass = 'main-md-screen';
    }

    return styleClass;
  }
}
