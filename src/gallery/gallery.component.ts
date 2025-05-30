import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService, AlbumItem, ImageItem } from '../Services/albumservice/album.service';
import { PolaroidComponent } from "../polaroid/polaroid.component";

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, PolaroidComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.less'
})
export class GalleryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private imageService: AlbumService) {}
  
  name:string|null = "";
  images: AlbumItem[] = []
  album: AlbumItem|undefined = undefined;
  loading = true
  error = false
  isGallery = false
  pageHeader = "Galerie"

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      console.log('Route-Param Name:', this.name);
    });

    if(this.name == null)
    {
      this.isGallery = true;
    }else{
      this.pageHeader = this.name
    }

    this.loadImages();
  }

  loadImages(): void {
    this.imageService.getImages().subscribe({
      next: (data) => {
        this.images = data
        this.album = this.images.find(p => p.name === this.pageHeader);
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
