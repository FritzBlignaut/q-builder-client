import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent)},
    {path: 'questions', loadComponent: () => import('./questions/questions.component').then(c => c.QuestionsComponent)},
    {path: 'settings', loadComponent: () => import('./settings/settings.component').then(c => c.SettingsComponent)},
];
