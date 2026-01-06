import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-animated-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-text.component.html',
  styleUrls: ['./animated-text.component.scss']
})
export class AnimatedTextComponent implements AfterViewInit {
  @Input() text: string = '';
  @Input() type: 'fade' | 'slide' | 'typewriter' | 'marquee' = 'fade';
  @Input() delay: number = 0;
  
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.animate();
    }, this.delay);
  }

  animate() {
    const element = this.el.nativeElement.querySelector('.animated-text');
    
    switch (this.type) {
      case 'fade':
        gsap.from(element, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power3.out'
        });
        break;
      case 'slide':
        gsap.from(element, {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
        break;
      case 'typewriter':
        const text = element.textContent;
        element.textContent = '';
        gsap.to({}, {
          duration: text.length * 0.05,
          onUpdate: function() {
            const progress = this['progress']();
            element.textContent = text.substring(0, Math.floor(progress * text.length));
          }
        });
        break;
    }
  }
}

