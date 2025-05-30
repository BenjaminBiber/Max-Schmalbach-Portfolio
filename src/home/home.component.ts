import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextService } from '../Services/textservice/text.service';
import { AlbumItem, AlbumService, ImageItem } from '../Services/albumservice/album.service';
import { PictureService } from '../Services/imageservice/image.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent implements OnInit {

  constructor(public TextService: TextService, private AlbumService: AlbumService, public PictureService: PictureService){}

  bestPictures: ImageItem[] = []
  Albums: AlbumItem[] = []

  ngOnInit(): void {
    this.loadImages()
    console.log(this.Albums)
    this.Albums
  }

  loadImages(): void {
    this.AlbumService.getImages().subscribe({
      next: (data) => {
        data.forEach(x => {
          const best = x.pictures.find(y => y.isBest);
          console.log(best)
          if (best) {
            this.bestPictures.push(best);
          }      
        });
        const original = [...this.bestPictures];

        while (this.bestPictures.length < 15) {
          const next = original[this.bestPictures.length % original.length];
          this.bestPictures.push(next);
        }

      },
      error: (err) => {
        console.error("Error loading images:", err)
      },
    })
  }

}
