import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainNavComponent} from './main-nav/main-nav.component';
import {HeaderComponent} from './header/header.component';
import {StatusGridComponent} from './status-grid/status-grid.component';
import {TestEnvComponent} from './test-env/test-env.component';


const routes: Routes = [
  {path: '', component: MainNavComponent},
  {path: 'dev', component: TestEnvComponent},
  {path: 'test', component: HeaderComponent},
  {path: 'stage', component: MainNavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
