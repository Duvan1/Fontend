import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderBotComponent } from './header-bot/header-bot.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    // components
    HeaderComponent,
    HeaderBotComponent
  ],
  declarations: [HeaderComponent, HeaderBotComponent]
})
export class LayoutModule { }
