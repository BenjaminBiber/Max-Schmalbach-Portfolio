import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextService } from '../Services/textservice/text.service';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.less'
})
export class HeaderComponentComponent {

  constructor(public TextService: TextService){}
  showMenu: boolean = false;

  HideBackground()
  {
    this.showMenu = false;
  }

}
