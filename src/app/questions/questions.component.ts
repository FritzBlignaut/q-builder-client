import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';
import { QuestionService } from './question.service';
import { Observable } from 'rxjs';
import { Question } from '../shared/models/question';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CardComponent, AsyncPipe],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent implements OnInit {
  questions$!: Observable<Question[]>;

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.questions$ = this.questionService.getQuestions();
  }
}
