import { Injectable } from '@angular/core';
import { QUESTIONS } from './question.mock.data';
import { Observable, of } from 'rxjs';
import { Question } from '../shared/models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions(): Observable<Question[]>  {
    return of(QUESTIONS);
  }
}
