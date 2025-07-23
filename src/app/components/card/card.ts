import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {

  title: string = 'Project One'
  description: string = 'Description of project one.'
  imageUrl: string = 'assets/project1.jpg'

}
