import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { ArtisticCardComponent, CardData } from '../../shared/components/artistic-card/artistic-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroSectionComponent, ArtisticCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  upcomingWorkshops: CardData[] = [
    {
      id: '1',
      title: 'Pottery & Ceramics Workshop',
      subtitle: 'Hands-on clay experience',
      description: 'Learn the ancient art of pottery making. Create your own ceramic pieces under the guidance of master artisans.',
      date: 'March 15, 2024',
      location: 'Art Studio Downtown',
      category: 'Workshop',
      link: '/workshops'
    },
    {
      id: '2',
      title: 'Watercolor Painting Masterclass',
      subtitle: 'Express through colors',
      description: 'Discover the fluid beauty of watercolors. Perfect for beginners and experienced artists alike.',
      date: 'March 22, 2024',
      location: 'Creative Space Gallery',
      category: 'Workshop',
      link: '/workshops'
    },
    {
      id: '3',
      title: 'Street Art & Graffiti Tour',
      subtitle: 'Urban culture exploration',
      description: 'Explore the vibrant street art scene. Learn about the stories behind the murals and meet local artists.',
      date: 'March 28, 2024',
      location: 'City Center',
      category: 'Tour',
      link: '/workshops'
    }
  ];

  upcomingFestivals: CardData[] = [
    {
      id: 'f1',
      title: 'Spring Art Festival 2024',
      subtitle: 'Celebrating creativity',
      description: 'A weekend celebration of art, music, and culture. Featuring local artists, live performances, and artisan markets.',
      date: 'April 5-7, 2024',
      location: 'Central Park',
      category: 'Festival',
      link: '/festivals'
    },
    {
      id: 'f2',
      title: 'Vintage Flea Market',
      subtitle: 'Treasures & finds',
      description: 'Discover unique vintage items, handmade crafts, and one-of-a-kind pieces from local vendors.',
      date: 'April 13, 2024',
      location: 'Old Town Square',
      category: 'Flea Market',
      link: '/festivals'
    }
  ];
}

