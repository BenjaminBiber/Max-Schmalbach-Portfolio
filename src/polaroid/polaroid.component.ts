import { Component, Input, OnInit } from '@angular/core';
import { AlbumService, AlbumItem, ImageItem } from '../Services/jsonservice/album.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-polaroid',
  imports: [CommonModule],
  templateUrl: './polaroid.component.html',
  styleUrl: './polaroid.component.less'
})
export class PolaroidComponent {

  constructor() {}

  @Input()
  picturePath: string = "";
  @Input()
  pictureTitle: string = "";
  @Input()
  isAlbum: boolean = true;

  dialogPath:string = "";
  showDialog:boolean = false;

  OpenDialog():void {
    this.showDialog = true;
  }

  CloseDialog():void {
    this.showDialog = false;
  }
}
