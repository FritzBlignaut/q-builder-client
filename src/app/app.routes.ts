import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'questions', pathMatch: 'full'},
    {path: 'questions', loadComponent: () => import('./components/question/question.component').then(m => m.QuestionComponent) },
];
