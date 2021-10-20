import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarchartexampleComponent } from './barchartexample/barchartexample.component';
import { StartCompComponent } from './start-comp/start-comp.component';

const routes: Routes = [
  {path:'',component:StartCompComponent},
  {path:'home',component:BarchartexampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
