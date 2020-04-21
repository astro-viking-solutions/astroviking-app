import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ConnectComponent} from './components/connect/connect.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'connect', component: ConnectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
