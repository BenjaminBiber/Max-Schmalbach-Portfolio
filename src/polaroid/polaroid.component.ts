import { Component, Input, OnInit } from '@angular/core';
import { ImageService, AlbumItem, ImageItem } from '../jsonservice/pictures.service';

@Component({
  selector: 'app-polaroid',
  imports: [],
  templateUrl: './polaroid.component.html',
  styleUrl: './polaroid.component.less'
})
export class PolaroidComponent implements OnInit {

  link:string = "/Galerie/"

  ngOnInit(): void {
    if(this.isAlbum)
    {
      this.link = this.link + this.pictureTitle
    }else {
      this.link = ""
    }
  }

  constructor() {}

  @Input()
  picturePath: string = "";
  @Input()
  pictureTitle: string = "";
  @Input()
  isAlbum: boolean = true;
}
