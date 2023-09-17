import { Directive, ElementRef, Input } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Directive({
  selector: '[swiperElement]'
})

export class SwiperDirective {

  @Input('config')
  config?: SwiperOptions = defaultConfig;

  constructor(private element: ElementRef) { }

  ngAfterViewInit(): void {
    Object.assign(this.element.nativeElement, this.config)
    this.element.nativeElement.initialize();
  }
}

const defaultConfig: SwiperOptions = {
  spaceBetween: 15,
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerGroup: 2,
      slidesPerView: 2,
    },
    768: {
      slidesPerGroup: 3,
      slidesPerView: 3,
    },
    960: {
      slidesPerGroup: 4,
      slidesPerView: 4,
    },
    1280: {
      slidesPerGroup: 6,
      slidesPerView: 6,
    }
  },
  navigation: true,
  injectStyles: [
    `
    .swiper{
      position: static;
  
    }
      .swiper-button-next,
      .swiper-button-prev {
        background-color: #007ee5;
        padding: 0px 8px;
        border-radius: 100%;
        color: white;
      }
      
      .swiper-button-next{
        right: -20px;
      }      
      
      .swiper-button-prev{
        left: -20px;
      }
      
      .swiper-button-next:hover,
      .swiper-button-prev:hover {
        background-color: #005499;
      }      
  
      .swiper-button-next svg,
      .swiper-button-prev svg
      { 
        width: 11px;
      }
  
      .swiper-button-disabled{
        display:none;
      }
  `
  ],
}


