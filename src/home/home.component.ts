import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

  projects = [
    {
      title: 'Summervibe Production',
      year: 2020,
      image: 'Projects/test.jpg'
    },
    {
      title: 'ART - Das kurzfilm Projekt',
      year: 2023,
      image: 'Projects/test2.jpg'
    },
    {
      title: 'Maschinenringe Deutschland',
      year: 2021,
      image: 'Projects/test1.jpg'
    },
    {
      title: 'Maschinenringe Deutschland',
      year: 2021,
      image: 'Projects/test1.jpg'
    },
    {
      title: 'Maschinenringe Deutschland',
      year: 2021,
      image: 'Projects/test1.jpg'
    },
    {
      title: 'Maschinenringe Deutschland',
      year: 2021,
      image: 'Projects/test1.jpg'
    },
    {
      title: 'Maschinenringe Deutschland',
      year: 2021,
      image: 'Projects/test1.jpg'
    },
    {
      title: 'Maschinenringe Deutschland',
      year: 2021,
      image: 'Projects/test1.jpg'
    },
    {
      title: 'Maschinenringe Deutschland',
      year: 2021,
      image: 'Projects/test1.jpg'
    },
    {
      title: 'Maschinenringe Deutschland',
      year: 2021,
      image: 'Projects/test1.jpg'
    },
    {
      title: 'Maschinenringe Deutschland',
      year: 2021,
      image: 'Projects/test1.jpg'
    },
    {
      title: 'Maschinenringe Deutschland',
      year: 2021,
      image: 'Projects/test1.jpg'
    }
  ];

  events = [{
    start: 2022,
    end: 2024,
    name: 'test event',
    description: 'das ist eine Test beschreibung, der TExt ist wichtig, der wird gehovert'
  },
  {
    start: 2019,
    end: 2021,
    name: 'Monday',
    description: 'das ist eine Test beschreibung, der TExt ist wichtig, der wird gehovert'
  }
]

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
