import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScreenListComponent} from './screen-list/screen-list.component';
import {ScreenCreateComponent} from './screen-create/screen-create.component';

const routes: Routes = [
  { path: 'screen', component: ScreenListComponent},
  { path: 'screen/:id', component: ScreenCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenRoutingModule{ }
