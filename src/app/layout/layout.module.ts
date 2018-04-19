import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderBotComponent } from './header-bot/header-bot.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    // components
    HeaderComponent,
    HeaderBotComponent,
    BannerComponent,
    FooterComponent
  ],
  declarations: [HeaderComponent, HeaderBotComponent, BannerComponent, FooterComponent]
})
export class LayoutModule { }
