import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisticCardComponent, CardData } from '../../shared/components/artistic-card/artistic-card.component';
import { EventTimelineComponent, TimelineEvent } from '../../shared/components/event-timeline/event-timeline.component';

@Component({
  selector: 'app-festivals',
  standalone: true,
  imports: [CommonModule, ArtisticCardComponent, EventTimelineComponent],
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.scss']
})
export class FestivalsComponent {
  festivals: CardData[] = [
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
    },
    {
      id: 'f3',
      title: 'Summer Cultural Festival',
      subtitle: 'Music, art & food',
      description: 'Experience diverse cultures through music, art installations, and authentic cuisine from around the world.',
      date: 'June 15-17, 2024',
      location: 'Waterfront Plaza',
      category: 'Festival',
      link: '/festivals'
    },
    {
      id: 'f4',
      title: 'Artisan Craft Fair',
      subtitle: 'Handmade excellence',
      description: 'Meet local artisans and discover handcrafted jewelry, pottery, textiles, and unique art pieces.',
      date: 'May 20, 2024',
      location: 'Arts District',
      category: 'Flea Market',
      link: '/festivals'
    }
  ];

  timelineEvents: TimelineEvent[] = [
    {
      date: 'April 5-7, 2024',
      title: 'Spring Art Festival',
      description: 'A vibrant celebration of art, music, and culture featuring over 100 artists, live performances, and interactive workshops.',
      location: 'Central Park'
    },
    {
      date: 'June 15-17, 2024',
      title: 'Summer Cultural Festival',
      description: 'Experience diverse cultures through music, art installations, and authentic cuisine from around the world.',
      location: 'Waterfront Plaza'
    },
    {
      date: 'September 8-10, 2024',
      title: 'Autumn Arts & Crafts Fair',
      description: 'Celebrate the season with local artisans, live demonstrations, and seasonal art installations.',
      location: 'City Center'
    }
  ];
}

