import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImageService, AlbumItem, ImageItem } from '../jsonservice/pictures.service';
import { PolaroidComponent } from "../polaroid/polaroid.component";

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, PolaroidComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.less'
})
export class GalleryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private imageService: ImageService) {}
  name:string|null = "";

  images: AlbumItem[] = []
  loading = true
  error = false

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      console.log('Route-Param Name:', this.name);
    });
    this.loadImages();
  }

  loadImages(): void {
    this.imageService.getImages().subscribe({
      next: (data) => {
        this.images = data
        this.loading = false
      },
      error: (err) => {
        console.error("Error loading images:", err)
        this.error = true
        this.loading = false
      },
    })
  }
}
