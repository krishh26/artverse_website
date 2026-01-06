import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Artist {
  id: string;
  name: string;
  artForm: string;
  bio: string;
  image?: string;
  socialLinks?: {
    instagram?: string;
    website?: string;
    email?: string;
  };
}

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent {
  artists: Artist[] = [
    {
      id: 'a1',
      name: 'Sarah Chen',
      artForm: 'Ceramic Artist',
      bio: 'Specializing in hand-thrown pottery and sculptural ceramics. Sarah brings traditional techniques into contemporary contexts.',
      socialLinks: {
        instagram: '@sarahchenceramics',
        website: 'sarahchen.art'
      }
    },
    {
      id: 'a2',
      name: 'Marcus Rivera',
      artForm: 'Street Artist',
      bio: 'Known for vibrant murals that tell stories of urban culture and community. Marcus transforms public spaces into galleries.',
      socialLinks: {
        instagram: '@marcusrivera.art',
        website: 'marcusrivera.com'
      }
    },
    {
      id: 'a3',
      name: 'Elena Petrov',
      artForm: 'Watercolor Painter',
      bio: 'Elena captures the ephemeral beauty of nature through delicate watercolor techniques. Her work celebrates the subtle moments.',
      socialLinks: {
        instagram: '@elenapetrov.art',
        website: 'elenapetrov.com'
      }
    },
    {
      id: 'a4',
      name: 'James Okafor',
      artForm: 'Sculptor',
      bio: 'Working with reclaimed materials, James creates powerful sculptures that explore themes of identity and transformation.',
      socialLinks: {
        instagram: '@jamesokafor.sculpture',
        website: 'jamesokafor.art'
      }
    },
    {
      id: 'a5',
      name: 'Maya Patel',
      artForm: 'Textile Artist',
      bio: 'Maya weaves traditional patterns with modern aesthetics, creating textiles that honor heritage while embracing innovation.',
      socialLinks: {
        instagram: '@mayapatel.textiles',
        website: 'mayapatel.com'
      }
    },
    {
      id: 'a6',
      name: 'David Kim',
      artForm: 'Photographer',
      bio: 'Documentary photographer capturing authentic moments of cultural expression and human connection.',
      socialLinks: {
        instagram: '@davidkim.photo',
        website: 'davidkim.photography'
      }
    }
  ];
}

