import { Component } from '@angular/core';

// import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'BookrackPage';
  tab2Root = 'FindsPage';
  tab3Root = 'PersonPage';

  constructor() {

  }
}
