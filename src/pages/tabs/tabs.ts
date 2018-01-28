import { Component } from '@angular/core';

import { FindPage } from '../find/find';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FindPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
