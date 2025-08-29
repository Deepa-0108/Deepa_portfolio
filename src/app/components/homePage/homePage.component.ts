import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-homePage',
  standalone: true,
  imports: [RouterLink,HttpClientModule],
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css']
})
export class HomePageComponent implements AfterViewInit {
  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {}
  title = 'Deepa.webpage';


  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const toggleButton = document.querySelector('.menu-toggle');
      const navLinks = document.querySelector('.nav-links');

      if (toggleButton && navLinks) {
        toggleButton.addEventListener('click', () => {
          navLinks.classList.toggle('active');
        });
      }
    }
  }
}
