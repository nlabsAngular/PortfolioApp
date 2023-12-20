import { Component, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PortfoliosComponent } from "./portfolios/portfolios.component";
import { ServicesComponent } from "./services/services.component";
import { HomeComponent } from "./home/home.component";
import { AsideComponent } from "./aside/aside.component";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, ContactComponent, PortfoliosComponent, ServicesComponent, AboutComponent, HomeComponent, AsideComponent]
})
export class AppComponent {
  public styleSwitcherOpen = false;
  public isDarkMode = false;

  toggleStyleSwitcher(): void {
    this.styleSwitcherOpen = !this.styleSwitcherOpen;
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if (this.styleSwitcherOpen) {
      this.styleSwitcherOpen = false;
    }
  }

  setActiveStyle(color: string): void {
    const alternateStyles = document.querySelectorAll('.alternate-style');
    Array.prototype.forEach.call(alternateStyles, (style: HTMLElement) => {
      if (color === style.getAttribute('title')) {
        style.removeAttribute('disabled');
      } else {
        style.setAttribute('disabled', 'true');
      }
    });
  }

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) { }

  toggleDayNightMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.updateDayNightIcon();
    this.updateBodyClass();
  }

  private updateBodyClass(): void {
    if (this.isDarkMode) {
      this.renderer.removeClass(this.document.body, 'dark');
    } else {
      this.renderer.addClass(this.document.body, 'dark');
    }
  }

  private updateDayNightIcon(): void {
    const dayNightIcon = this.el.nativeElement.querySelector('.day-night i');

    if (dayNightIcon) {
      this.renderer.removeClass(dayNightIcon, 'fa-sun');
      this.renderer.removeClass(dayNightIcon, 'fa-moon');
      this.renderer.addClass(dayNightIcon, this.isDarkMode ? 'fa-moon' : 'fa-sun');
    }
  }

  ngOnInit(): void {
    this.isDarkMode = true;
    this.updateDayNightIcon();
  }
}
