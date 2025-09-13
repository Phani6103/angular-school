import { Component, input, Input } from '@angular/core';
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
      displayName: 'Home',
      link: '/'
    },
    {
      displayName: 'Signals',
      link: '/signals'
    },
    {
      displayName: 'Parent Component',
      link: '/parent-component'
    },
    {
      displayName: 'Child Component',
      link: '/child-component'
    },
    {
      displayName: 'View Child',
      link: '/view-child'
    },
    {
      displayName: 'Content Child',
      link: '/content-child'
    },
    {
      displayName: 'Lifecycle Hooks',
      link: '/lifecycle-hooks'
    },
    {
      displayName: 'Forms',
      link: '/forms'
    }
    ];

}
