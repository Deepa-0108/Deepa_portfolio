import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderService } from '../../../backend/header.service';
import { Header } from '../../../models/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.compoenet.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  lable: Header | undefined;

  slides: string[] = ['https://wholesaledekho.com/images/slider/2023/09/-2023-09-02_12_10_06.jpg',
 'https://thehouseofrare.com/cdn/shop/files/EOSS-COLLECTION_WEB_85aa4a27-6627-4c06-a3ec-c3d88ff67b0b.png?v=1750143037&width=2732',
 'https://theformalclub.in/cdn/shop/files/Fulkl-SLEVVEESSS_74f73ad8-8779-4f5c-9d89-c70fb07ff625.jpg?v=1721209695']

  currentIndex = 0;
  intervalId?: any;

  constructor(
    private headerService: HeaderService,
    private translateService: TranslateService
  ) {
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  ngOnInit(): void {
    this.headerService.getHeader().subscribe((header: Header) => (this.lable = header));
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    this.stopSlideshow();
  }

  startSlideshow() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 2000);
  }

  stopSlideshow() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.stopSlideshow();
    this.startSlideshow();
  }
}
