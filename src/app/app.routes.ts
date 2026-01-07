import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tie-dye-workshop',
    pathMatch: 'full'
  },
  {
    path: 'workshops',
    loadComponent: () => import('./pages/workshops/workshops.component').then(m => m.WorkshopsComponent)
  },
  {
    path: 'festivals',
    loadComponent: () => import('./pages/festivals/festivals.component').then(m => m.FestivalsComponent)
  },
  {
    path: 'artists',
    loadComponent: () => import('./pages/artists/artists.component').then(m => m.ArtistsComponent)
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'tie-dye-workshop',
    loadComponent: () => import('./pages/tie-dye-workshop/tie-dye-workshop.component').then(m => m.TieDyeWorkshopComponent)
  },
  {
    path: 'tiedyeworkshopmembers',
    loadComponent: () => import('./pages/tiedyeworkshopmembers/tiedyeworkshopmembers.component').then(m => m.TieDyeWorkshopMembersComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

