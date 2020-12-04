import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modulos/header/header.component';
import { FooterComponent } from './modulos/footer/footer.component';
import { HeaderMobileComponent } from './modulos/header-mobile/header-mobile.component';
import { GeneralHomeComponent } from './pages/general-home/general-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderMobileComponent,
    GeneralHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
