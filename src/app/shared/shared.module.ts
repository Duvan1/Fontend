import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    // components
    LoadingIndicatorComponent
  ],
  declarations: [LoadingIndicatorComponent]
})
export class SharedModule { }
