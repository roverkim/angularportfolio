import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
// import { AppRoutingModule }     from './app-routing.module';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { IntrosectionComponent } from './introsection/introsection.component';
import { PorfoliosectionComponent } from './porfoliosection/porfoliosection.component';
import { ContactsectionComponent } from './contactsection/contactsection.component';
import { ApicallsService } from './apicalls.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoadScreenComponent,
    IntrosectionComponent,
    PorfoliosectionComponent,
    ContactsectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ApicallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
