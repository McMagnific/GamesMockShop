import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { register } from 'swiper/element/bundle';
import { SwiperDirective } from './swiper.directive';

@NgModule({
  declarations: [
    SwiperDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SwiperDirective
  ]
})

export class SliderModule {

  constructor() {

    register();

  }
}
