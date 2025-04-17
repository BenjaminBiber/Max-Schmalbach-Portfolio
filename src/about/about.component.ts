import { Component } from '@angular/core';
import { PolaroidComponent } from '../polaroid/polaroid.component';

@Component({
  selector: 'app-about',
  imports: [PolaroidComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less'
})
export class AboutComponent {

}
