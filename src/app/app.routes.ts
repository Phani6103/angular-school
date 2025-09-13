import { Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { TemplateDriven } from './components/forms/template-driven/template-driven';
import { TemplateDrivenSignalFormComponent } from './components/forms/template-driven-signal-form/template-driven-signal-form.component';
import { Reactive } from './components/forms/reactive/reactive';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home').then(m => m.Home)
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home').then(m => m.Home)
    },
    {
        path: 'child-component',
        loadComponent: () => import('./components/child/child-component').then(m => m.ChildComponent)
    },
    {
        path: 'parent-component',
        loadComponent: () => import('./components/parent/parent-component').then(m => m.ParentComponent)
    },  
    {
        path: 'forms',
        component: FormsComponent, // The parent container
        children: [
        { path: 'template-driven', component:  TemplateDriven},
        { path: 'signal-form', component: TemplateDrivenSignalFormComponent },
        { path: 'reactive-form', component: Reactive },
        { path: '', redirectTo: 'template-driven', pathMatch: 'full' },
        ]
    },
    {
        path: 'signals',
        loadComponent: () => import('./components/signals/signals').then(m => m.Signals)
    },
    {
        path: '**',
        loadComponent: () => import('./components/not-found/not-found').then(m => m.NotFound)
    }
];
