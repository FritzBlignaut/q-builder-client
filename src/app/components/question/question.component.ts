import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionComponent } from '../../shared/accordion/accordion.component';
import { QuestionFormComponent } from '../queston-form/question-form.component';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [RouterOutlet, AccordionComponent, QuestionFormComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {

}
