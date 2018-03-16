import { BrowserModule } from '@angular/platform-browser';
import { CodePush } from "@ionic-native/code-push";
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Vibration } from '@ionic-native/vibration';

import { BookProvider } from '../providers/book/book';
import { BookServicesProvider } from '../providers/book-services/book.services';
import { ComponentsModule } from './../components/components.module';
import { HttpProvider } from '../providers/http/http';
import { MyApp } from './app.component';
import { NativeProvider } from '../providers/native/native';
import { TabsPage } from '../pages/tabs/tabs';
import { UserServicesProvider } from '../providers/user-services/user-services';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true',
      backButtonText: "",
      // modalEnter:''
      mode: 'md',
      activator: 'highlight',
      pageTransition: 'ios-transition',
      pageTransitionDelay: 30,
      backButtonIcon: 'md-arrow-back'
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    BookProvider,
    BookServicesProvider,
    CodePush,
    HttpProvider,
    NativePageTransitions,
    NativeProvider,
    StatusBar,
    SplashScreen,
    UserServicesProvider,
    Vibration,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
