import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderBotComponent } from './header-bot/header-bot.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { BannerFootComponent } from './banner-foot/banner-foot.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    // components
    HeaderComponent,
    HeaderBotComponent,
    BannerComponent,
    FooterComponent,
    BannerFootComponent
  ],
  declarations: [HeaderComponent, HeaderBotComponent, BannerComponent, FooterComponent, BannerFootComponent]
})
export class LayoutModule { }
