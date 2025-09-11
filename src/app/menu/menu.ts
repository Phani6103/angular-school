import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [
    RouterLink
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {

  menuItems = [
    {
      id: 1,
      displayName: 'Home',
      link: '/'
    },
    {
      id: 2,
      displayName: 'Signals',
      link: '/signals'
    },
    {
      id: 3,
      displayName: 'Parent Component',
      link: '/parent-component'
    },
    {
      id: 4,
      displayName: 'Child Component',
      link: '/child-component'
    },
    {
      id: 5,
      displayName: 'View Child',
      link: '/view-child'
    },
    {
      id: 6,
      displayName: 'Content Child',
      link: '/content-child'
    },
    {
      id: 7,
      displayName: 'Lifecycle Hooks',
      link: '/lifecycle-hooks'
    },
    {
      id: 8,
      displayName: 'Template Driven Form',
      link: '/template-driven-form'
    },
    {
      id: 9,
      displayName: 'Reactive Form',
      link: '/reactive-form'
    }
    ];

}
