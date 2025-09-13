import { Routes } from '@angular/router';

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
        path: 'reactive-form',
        loadComponent: () => import('./components/forms/reactive/reactive').then(m => m.Reactive)
    },
    {
        path: 'template-driven-form',
        loadComponent: () => import('./components/forms/template-driven/template-driven').then(m => m.TemplateDriven)
    },
    {
        path: 'template-driven-signal-form',
        loadComponent: () => import('./components/forms/template-driven-signal-form/template-driven-signal-form').then(m => m.TemplateDrivenSignalForm)
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
