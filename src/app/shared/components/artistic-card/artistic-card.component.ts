import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface CardData {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  date?: string;
  location?: string;
  category?: string;
  link?: string;
}

@Component({
  selector: 'app-artistic-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './artistic-card.component.html',
  styleUrls: ['./artistic-card.component.scss']
})
export class ArtisticCardComponent {
  @Input() data!: CardData;
  @Input() variant: 'default' | 'large' | 'portrait' = 'default';
}

