import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTalkComponent } from './create-talk/create-talk.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateTalkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
