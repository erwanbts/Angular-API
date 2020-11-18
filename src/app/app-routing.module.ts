import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DescriptionComponent} from './description/description.component';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'description', component: DescriptionComponent},
  {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
