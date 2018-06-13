import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

// componentes pagina deseados
import { PendientesComponent } from '../pages/pendientes/pendientes.component';
import { TerminadosComponent } from '../pages/terminados/terminados.component';
import { AgregarComponent } from '../pages/agregar/agregar.component';
import { DetalleComponent } from '../pages/detalle/detalle.component';

// Servicios
import { ListaDeseosService } from '../app/services/lista-deseos.service';

//Pipes
import { PlaceHolderPipe } from "../app/pipes/placeholder.pipes";
import { PendientesPipe } from "../app/pipes/pendientes.pipes"; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PlaceHolderPipe,
    PendientesPipe,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    DetalleComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
