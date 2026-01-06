import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  culturalQuotes = [
    "Art is not what you see, but what you make others see.",
    "Culture is the widening of the mind and of the spirit.",
    "Creativity takes courage.",
    "Every artist was first an amateur."
  ];
  
  randomQuote = this.culturalQuotes[Math.floor(Math.random() * this.culturalQuotes.length)];
}

