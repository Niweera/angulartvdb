import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ItemService } from './services/item.service';
import { AuthService } from './services/auth.service';

import { ItemsComponent } from './components/items/items.component';
import { HomeComponent } from './components/home/home.component';
import { DmcaComponent } from './components/dmca/dmca.component';
import { HelpComponent } from './components/help/help.component';
import { AddItemComponent } from './components/add-item/add-item.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dmca', component: DmcaComponent},
  {path: 'help', component: HelpComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsComponent,
    HomeComponent,
    DmcaComponent,
    HelpComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angulartvdb'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ItemService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
