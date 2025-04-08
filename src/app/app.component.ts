import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from "../header-component/header-component.component";
import { CommonModule } from '@angular/common';
import { FooterComponentComponent } from '../footer-component/footer-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponentComponent, CommonModule, FooterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {
  title = 'Christoph_Bauer_Portfolio';
  Description: string[] = [' Fotograf', ' Videograf', ' Cutter'];
  viewText:string = '';

  async ngOnInit() {
    await this.TextEffect();
  }

  async TextEffect() {
    while (true) {
      for (let desc of this.Description) {
        for (let txt of desc) {
          this.viewText += txt;
          await this.sleep(300);
        }
        await this.sleep(1000)
        while (this.viewText.length > 0) {
          this.viewText = this.viewText.slice(0, -1);
          await this.sleep(300);
        }
      }
    }
  }


  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  transformStyle: string = '';

  onMouseMove(event: MouseEvent) {
    const imageContainer = event.currentTarget as HTMLElement;
    const rect = imageContainer.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 20;
    const moveY = (y / rect.height - 0.5) * 20;

    this.transformStyle = `translate(${moveX}px, ${moveY}px) scale(1.0)`;
  }

  onMouseLeave() {
    this.transformStyle = 'translate(0, 0) scale(1)';
  }

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
  img: 'Works/test.jpg',
  alt: 'test'
},{
  img: 'Works/test1.jpg',
  alt: 'test2'
},{
  img: 'Works/test2.jpg',
  alt: 'test3'
},{
  img: 'Works/test3.jpg',
  alt: 'test4'
},{
  img: 'Works/test4.jpg',
  alt: 'test5'
},{
  img: 'Works/test5.jpg',
  alt: 'test5'
},{
  img: 'Works/test6.jpg',
  alt: 'test6'
},{
  img: 'Works/test7.jpg',
  alt: 'test7'
},{
  img: 'Works/test8.jpg',
  alt: 'test8'
},]
}
