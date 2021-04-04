import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing.module';
import {HomeComponent} from './components/home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NavComponent} from './components/nav/nav.component';
import {FooterComponent} from './components/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConnectComponent} from './components/connect/connect.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {ServicesComponent} from './components/services/services.component';
import {LabsComponent} from './components/labs/labs.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ConnectComponent,
    ServicesComponent,
    LabsComponent,
    SidenavComponent
  ],
    imports: [
        BrowserModule,
      HttpClientModule,
        RouterModule,
        AppRoutingModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        FormsModule,
        MatSnackBarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
