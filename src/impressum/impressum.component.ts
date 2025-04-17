import { Component } from '@angular/core';
import { TextService } from '../Services/textservice/text.service';

@Component({
  selector: 'app-impressum',
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.less'
})
export class ImpressumComponent {
  constructor(public TextService: TextService){}
}
