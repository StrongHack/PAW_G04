import { Component } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initScripts();
    this.loadScripts();
  }
  loadScripts() {
    // Importe os arquivos JavaScript necessários
    const scripts = [
      'assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
      'assets/vendor/swiper/swiper-bundle.min.js',
      'assets/vendor/php-email-form/validate.js',
      'assets/js/main.js'
    ];

    for (const script of scripts) {
      const node = document.createElement('script');
      node.src = script;
      node.type = 'text/javascript';
      node.async = true;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
  
  private initScripts(): void {
    const select = (el: string | HTMLElement | null, all = false) => {
      if (typeof el === 'string') {
        el = document.querySelector<HTMLElement>(el);
      }
      if (!el) {
        return null;
      }
      if (all) {
        return Array.from(el.querySelectorAll<HTMLElement>('*'));
      } else {
        return el;
      }
    }
    
    

    /**
     * Easy event listener function
     */
    const on = (type: string, el: string | HTMLElement | null, listener: EventListenerOrEventListenerObject, all = false) => {
      const selectEl = select(el, all);
      if (!selectEl) {
        return;
      }
      if (selectEl instanceof Element) {
        selectEl.addEventListener(type, listener);
      } else if (Array.isArray(selectEl)) {
        selectEl.forEach((e: Element) => e.addEventListener(type, listener));
      }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el: HTMLElement, listener: EventListenerOrEventListenerObject) => {
      el.addEventListener('scroll', listener);
    }

    /**
     * Toggle .navbar-reduce
     */
    const selectHNavbar = select('.navbar-default');
    if (selectHNavbar instanceof HTMLElement) {
      onscroll(document.documentElement, () => {
        if (window.scrollY > 100) {
          selectHNavbar.classList.add('navbar-reduce');
          selectHNavbar.classList.remove('navbar-trans');
        } else {
          selectHNavbar.classList.remove('navbar-reduce');
          selectHNavbar.classList.add('navbar-trans');
        }
      });
    }

    /**
     * Back to top button
     */
    const backtotop = select('.back-to-top');
    if (backtotop instanceof HTMLElement) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active');
        } else {
          backtotop.classList.remove('active');
        }
      }
      window.addEventListener('load', toggleBacktotop);
      onscroll(document.documentElement, toggleBacktotop);
    }

    /**
     * Preloader
     */
    const preloader = select('#preloader');
    if (preloader instanceof HTMLElement) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }

    /**
     * Search window open/close
     */
    const body = select('body');
    if (body instanceof HTMLElement) {
      on('click', '.navbar-toggle-box', function(e: Event) {
        e.preventDefault();
        body.classList.add('box-collapse-open');
        body.classList.remove('box-collapse-closed');
      });

      on('click', '.close-box-collapse', function(e: Event) {
        e.preventDefault();
        body.classList.remove('box-collapse-open');
        body.classList.add('box-collapse-closed');
      });
    }

  /**
   * News carousel
   */
  new Swiper('#news-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.news-carousel-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Testimonial carousel
   */
  new Swiper('#testimonial-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.testimonial-carousel-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Property Single carousel
   */
  new Swiper('#property-single-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.property-single-carousel-pagination',
      type: 'bullets',
      clickable: true
    }
  });


  }

}
