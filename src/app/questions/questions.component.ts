import { Component } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  constructor(private questionService: QuestionService) {}
}
