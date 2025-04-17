import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextService } from '../Services/textservice/text.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

  constructor(public TextService: TextService){}

Works = [{
  img: 'test.jpg',
  alt: 'test'
},{
  img: 'test1.jpg',
  alt: 'test2'
},{
  img: 'test2.jpg',
  alt: 'test3'
},{
  img: 'test3.jpg',
  alt: 'test4'
},{
  img: 'test4.jpg',
  alt: 'test5'
},{
  img: 'test5.jpg',
  alt: 'test5'
},{
  img: 'test6.jpg',
  alt: 'test6'
},{
  img: 'test7.jpg',
  alt: 'test7'
},{
  img: 'test8.jpg',
  alt: 'test8'
},]
}
