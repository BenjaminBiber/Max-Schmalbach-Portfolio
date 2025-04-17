import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextService } from '../Services/textservice/text.service';

@Component({
  selector: 'app-footer-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer-component.component.html',
  styleUrl: './footer-component.component.less'
})
export class FooterComponentComponent {
  constructor(public TextService: TextService){}
}
