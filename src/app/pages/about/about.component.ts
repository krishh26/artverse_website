import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  values = [
    {
      title: 'Accessibility',
      description: 'We believe art should be accessible to everyone, regardless of background or experience level.'
    },
    {
      title: 'Community',
      description: 'Building connections between artists, creators, and art lovers to foster a vibrant creative community.'
    },
    {
      title: 'Cultural Heritage',
      description: 'Honoring traditional arts while embracing contemporary expressions and innovative techniques.'
    },
    {
      title: 'Experimentation',
      description: 'Encouraging creative exploration and pushing boundaries in artistic expression.'
    }
  ];
}

