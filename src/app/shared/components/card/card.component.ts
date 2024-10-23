import { Component, Input } from '@angular/core';
import { Question } from '../../models/question';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() data!: Question[];
}
