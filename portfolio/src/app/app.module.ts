import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
// import { AppRoutingModule }     from './app-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AppComponent, SafePipe } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { IntrosectionComponent } from './introsection/introsection.component';
import { PorfoliosectionComponent } from './porfoliosection/porfoliosection.component';
import { ContactsectionComponent } from './contactsection/contactsection.component';
import { ApicallsService } from './apicalls.service';
import { SkillsComponent } from './skills/skills.component';
import { DownloadButtonComponent } from './download-button/download-button.component';



@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    NavBarComponent,
    LoadScreenComponent,
    IntrosectionComponent,
    PorfoliosectionComponent,
    ContactsectionComponent,
    SkillsComponent,
    DownloadButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule,
    HttpClientModule,
    PdfViewerModule,
    CarouselModule.forRoot()
  ],
  providers: [ApicallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
