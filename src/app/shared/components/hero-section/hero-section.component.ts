import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.animateHero();
  }

  animateHero() {
    const hero = this.el.nativeElement;
    const title = hero.querySelector('.hero-title');
    const tagline = hero.querySelector('.hero-tagline');
    const cta = hero.querySelector('.hero-cta');
    const marquee = hero.querySelector('.hero-marquee');

    const tl = gsap.timeline();
    
    tl.from(title, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power3.out'
    })
    .from(tagline, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5')
    .from(cta, {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.3');

    // Animate marquee
    if (marquee) {
      const content = marquee.querySelector('.marquee-content');
      if (content) {
        gsap.to(content, {
          x: '-50%',
          duration: 30,
          repeat: -1,
          ease: 'none'
        });
      }
    }
  }
}

