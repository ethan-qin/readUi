import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { BatteryStatus } from "@ionic-native/battery-status";
import { BrowserModule } from '@angular/platform-browser';
import { CodePush } from "@ionic-native/code-push";
import { Dialogs } from '@ionic-native/dialogs';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { Vibration } from '@ionic-native/vibration';
import { Toast } from '@ionic-native/toast';

import { BookProvider } from '../providers/book/book';
import { BookServicesProvider } from '../providers/book-services/book.services';
import { ComponentsModule } from './../components/components.module';
import { HttpProvider } from '../providers/http/http';
import { MyApp } from './app.component';
import { NativeProvider } from '../providers/native/native';
import { TabsPage } from '../pages/tabs/tabs';
import { UserServicesProvider } from '../providers/user-services/user-services';
import { LoginPreviewPage } from '../pages/login-preview/login-preview';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPreviewPage
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
    TabsPage,
    LoginPreviewPage
  ],
  providers: [
    AndroidFullScreen,
    BookProvider,
    BatteryStatus,
    BookServicesProvider,
    CodePush,
    Dialogs,
    HttpProvider,
    NativePageTransitions,
    NativeProvider,
    StatusBar,
    SplashScreen,
    UserServicesProvider,
    Vibration,
    Toast,
    SpinnerDialog,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
