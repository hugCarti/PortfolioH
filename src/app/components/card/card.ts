import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input({required: true}) title: string = '';
  @Input({required: true}) githubUrl: string = '';
  @Input({required: true}) imageUrl: string = '';

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}