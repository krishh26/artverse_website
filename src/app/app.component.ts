import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { filter, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  template: `
    <app-navbar *ngIf="showNavbar"></app-navbar>
    <router-outlet></router-outlet>
    <app-footer *ngIf="showFooter"></app-footer>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ArtVerse';
  showNavbar = true;
  showFooter = true;
  private router = inject(Router);
  private routerSubscription?: Subscription;

  ngOnInit() {
    // Check initial route
    this.updateVisibility();
    
    // Scroll to top on route change and update visibility
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.updateVisibility();
      });
  }

  private updateVisibility() {
    const url = this.router.url;
    const isTieDyePage = url.includes('/tie-dye-workshop');
    this.showNavbar = !isTieDyePage;
    this.showFooter = !isTieDyePage;
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}

