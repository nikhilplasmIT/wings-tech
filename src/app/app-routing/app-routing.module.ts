
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router} from '@angular/router';



const routes : Routes = [

//  {path: '/feedback', component:FeedbackComponent},




]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingcomponents = []
