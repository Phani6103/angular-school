import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home').then(m => m.Home)
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
        loadComponent: () => import('./forms/reactive/reactive').then(m => m.Reactive)
    },
    {
        path: 'template-driven-form',
        loadComponent: () => import('./forms/template-driven/template-driven').then(m => m.TemplateDriven)
    },
    {
        path: 'signals',
        loadComponent: () => import('./signals/signals').then(m => m.Signals)
    },
    {
        path: '**',
        loadComponent: () => import('./not-found/not-found').then(m => m.NotFound)
    }
];
