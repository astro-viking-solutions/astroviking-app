import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ConnectComponent} from './components/connect/connect.component';
import {ServicesComponent} from './components/services/services.component';
import {LabsComponent} from './components/labs/labs.component';
import {ToolsComponent} from './components/tools/tools.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'connect', component: ConnectComponent},
  {path: 'tools', component: ToolsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'labs', component: LabsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
