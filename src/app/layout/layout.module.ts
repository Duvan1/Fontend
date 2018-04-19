import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderBotComponent } from './header-bot/header-bot.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    // components
    HeaderComponent,
    HeaderBotComponent,
    BannerComponent
  ],
  declarations: [HeaderComponent, HeaderBotComponent, BannerComponent]
})
export class LayoutModule { }
