import { Component, Input } from '@angular/core';
import { ImageService, AlbumItem, ImageItem } from '../jsonservice/pictures.service';

@Component({
  selector: 'app-polaroid',
  imports: [],
  templateUrl: './polaroid.component.html',
  styleUrl: './polaroid.component.less'
})
export class PolaroidComponent {

  constructor() {
}
  @Input()
  picturePath: string = "";
  @Input()
  pictureTitle: string = "";
}
