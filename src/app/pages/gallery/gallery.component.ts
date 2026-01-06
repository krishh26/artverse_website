import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasonryGalleryComponent, GalleryItem } from '../../shared/components/masonry-gallery/masonry-gallery.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, MasonryGalleryComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800',
      title: 'Pottery Workshop',
      description: 'Participants creating ceramic pieces',
      category: 'Workshop'
    },
    {
      id: 'g2',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800',
      title: 'Art Festival Crowd',
      description: 'Vibrant atmosphere at Spring Art Festival',
      category: 'Festival'
    },
    {
      id: 'g3',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800',
      title: 'Street Art Tour',
      description: 'Exploring urban murals',
      category: 'Tour'
    },
    {
      id: 'g4',
      image: 'https://images.unsplash.com/photo-1499781350541-7783f6e6e32c?w=800',
      title: 'Watercolor Session',
      description: 'Artists at work',
      category: 'Workshop'
    },
    {
      id: 'g5',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      title: 'Flea Market Finds',
      description: 'Unique vintage treasures',
      category: 'Flea Market'
    },
    {
      id: 'g6',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800',
      title: 'Ceramic Exhibition',
      description: 'Showcasing student work',
      category: 'Exhibition'
    },
    {
      id: 'g7',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800',
      title: 'Cultural Performance',
      description: 'Live music at the festival',
      category: 'Festival'
    },
    {
      id: 'g8',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800',
      title: 'Artist Collaboration',
      description: 'Mural painting in progress',
      category: 'Workshop'
    },
    {
      id: 'g9',
      image: 'https://images.unsplash.com/photo-1499781350541-7783f6e6e32c?w=800',
      title: 'Textile Workshop',
      description: 'Learning traditional weaving',
      category: 'Workshop'
    }
  ];
}

