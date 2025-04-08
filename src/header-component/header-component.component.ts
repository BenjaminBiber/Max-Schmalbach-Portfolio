import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.less'
})
export class HeaderComponentComponent {
  showMenu: boolean = false;

  HideBackground()
  {
    this.showMenu = false;
  }

}
