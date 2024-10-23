import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';
import { QuestionService } from './question.service';
import { Observable } from 'rxjs';
import { Question } from '../shared/models/question';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CardComponent, AsyncPipe, NgFor],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent implements OnInit {
  @ViewChildren('questionSection') questionSections!: QueryList<ElementRef>;
  
  questions$!: Observable<Question[]>;

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.questions$ = this.questionService.getQuestions();
  }

  scrollToNextQuestion(currentIndex: number) {
    const sectionsArray = this.questionSections.toArray();
    const nextIndex = currentIndex + 1;

    if (nextIndex < sectionsArray.length) {
      sectionsArray[nextIndex].nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToPreviousQuestion(currentIndex: number) {
    const sectionsArray = this.questionSections.toArray();
    const previousIndex = currentIndex - 1;

    if (previousIndex >= 0) {
      sectionsArray[previousIndex].nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
