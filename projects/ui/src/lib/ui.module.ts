import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgMaterialModule } from './ng-material.module';

@NgModule({
  declarations: [UiComponent, ToolbarComponent],
  imports: [NgMaterialModule],
  exports: [UiComponent, ToolbarComponent],
})
export class UiModule {}
