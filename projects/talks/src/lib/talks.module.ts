import { NgModule } from '@angular/core';
import { TalksComponent } from './talks.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { NgMaterialModule } from 'projects/ui/src/lib/ng-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TalksComponent, CreateComponent, ViewComponent],
  imports: [NgMaterialModule, FormsModule, ReactiveFormsModule],
  exports: [TalksComponent, CreateComponent],
})
export class TalksModule {}
