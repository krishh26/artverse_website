import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GalleryItem {
  id: string;
  image: string;
  title?: string;
  description?: string;
  category?: string;
}

@Component({
  selector: 'app-masonry-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './masonry-gallery.component.html',
  styleUrls: ['./masonry-gallery.component.scss']
})
export class MasonryGalleryComponent {
  @Input() items: GalleryItem[] = [];
  @Input() columns: number = 3;
  @Output() itemClick = new EventEmitter<GalleryItem>();
  
  selectedItem: GalleryItem | null = null;
  showLightbox = false;

  openLightbox(item: GalleryItem) {
    this.selectedItem = item;
    this.showLightbox = true;
    document.body.style.overflow = 'hidden';
    this.itemClick.emit(item);
  }

  closeLightbox() {
    this.showLightbox = false;
    this.selectedItem = null;
    document.body.style.overflow = '';
  }
}

