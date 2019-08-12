import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { throwIfAlreadyLoaded } from '@key-solutions/utils';
import { NgCoreModule } from '@key-solutions/web';

@NgModule({
  imports: [NgCoreModule, IonicModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class NgIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: NgIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'NgIonicCoreModule');
  }
}
