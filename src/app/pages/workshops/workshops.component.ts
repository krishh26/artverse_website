import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArtisticCardComponent, CardData } from '../../shared/components/artistic-card/artistic-card.component';

@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [CommonModule, FormsModule, ArtisticCardComponent],
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent {
  selectedArtType: string = 'all';
  selectedCity: string = 'all';
  selectedDate: string = 'all';
  
  artTypes = ['all', 'Pottery', 'Painting', 'Photography', 'Sculpture', 'Textiles', 'Digital Art'];
  cities = ['all', 'Downtown', 'City Center', 'Old Town', 'Arts District'];
  
  allWorkshops: CardData[] = [
    {
      id: 'w1',
      title: 'Pottery & Ceramics Workshop',
      subtitle: 'Hands-on clay experience',
      description: 'Learn the ancient art of pottery making. Create your own ceramic pieces under the guidance of master artisans.',
      date: 'March 15, 2024',
      location: 'Art Studio Downtown',
      category: 'Pottery',
      link: '/workshops'
    },
    {
      id: 'w2',
      title: 'Watercolor Painting Masterclass',
      subtitle: 'Express through colors',
      description: 'Discover the fluid beauty of watercolors. Perfect for beginners and experienced artists alike.',
      date: 'March 22, 2024',
      location: 'Creative Space Gallery',
      category: 'Painting',
      link: '/workshops'
    },
    {
      id: 'w3',
      title: 'Street Art & Graffiti Tour',
      subtitle: 'Urban culture exploration',
      description: 'Explore the vibrant street art scene. Learn about the stories behind the murals and meet local artists.',
      date: 'March 28, 2024',
      location: 'City Center',
      category: 'Digital Art',
      link: '/workshops'
    },
    {
      id: 'w4',
      title: 'Textile Weaving Workshop',
      subtitle: 'Traditional craft revival',
      description: 'Master the art of textile weaving. Create beautiful patterns and learn traditional techniques.',
      date: 'April 2, 2024',
      location: 'Arts District',
      category: 'Textiles',
      link: '/workshops'
    },
    {
      id: 'w5',
      title: 'Sculpture & Form',
      subtitle: '3D artistic expression',
      description: 'Work with various materials to create three-dimensional art. Explore form, space, and texture.',
      date: 'April 10, 2024',
      location: 'Old Town',
      category: 'Sculpture',
      link: '/workshops'
    },
    {
      id: 'w6',
      title: 'Photography & Storytelling',
      subtitle: 'Capture moments',
      description: 'Learn composition, lighting, and storytelling through photography. Bring your camera and creativity.',
      date: 'April 18, 2024',
      location: 'City Center',
      category: 'Photography',
      link: '/workshops'
    }
  ];

  get filteredWorkshops(): CardData[] {
    return this.allWorkshops.filter(workshop => {
      const matchesArtType = this.selectedArtType === 'all' || workshop.category === this.selectedArtType;
      const matchesCity = this.selectedCity === 'all' || workshop.location?.includes(this.selectedCity);
      return matchesArtType && matchesCity;
    });
  }
}

